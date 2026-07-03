const Item = require("../models/Item");


exports.getItems = async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    }catch(error){
        res.status(500).json({
            message:"error fetching items",
        });
    }
};

exports.createItem = async (req, res) => {
    try{
        const item = await Item.create({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            location: req.body.location,
            dateLost: req.body.dateLost,
            status: "Lost",
            user: req.user.id,
        });
        res.json({
            message: "Item reported successfully",
            item,
        });
    }
    catch(error){
        res.status(500).json({
            message: "error reporting item",
        });
    }
};


exports.markFound = async (req, res) => {
    try{
        const item = await Item.findById(req.params.id);

        if(!item){
            return res.status(404).json({
                message: "item not found",
            });
        }

        if(item.user.toString() !== req.user.id){
            return res.status(403).json({
                message: "unauthorized",
            });
        }

        item.status= "Found";
        await item.save();

        res.json({
            message: "Item marked as found",
            item,
        });

    }catch(error){
        res.status(500).json({
            message: "error updating item",
        });
    }
};

exports.deleteItem = async (req, res) => {
    try{
        await Item.findByIdAndDelete(req.params.id);
        res.json({
            message: "Item deleted successfully",
        });
    }catch(error){
        res.status(500).json({
            message: "error deleting item",
        });
    }
};

exports.getMyItems = async (req, res) => {
    try{
    const items = await Item.find({
        user: req.user.id,
    });
    res.json(items);
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "error fetching your items",
        });
    }
};
