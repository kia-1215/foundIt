const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
    try{
        if(req.body.password !== req.body.confirmPassword){
            return res.status(400).json({
                message: " passwords do not match",
            });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        res.json({
            message: "user registered",
            user,
        });
    }catch(error){
        res.status(500).json({
            mesage: "error registering user",
        });
    }
};

exports.login = async (req, res) => {
    try{
        const user = await User.findOne({
            email: req.body.email,
        });

        if(!user){
            return res.status(404).json({
                message: "user not found",
            });
        }

        const match = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if(!match){
            return rs.status(401).json({
                message: "invaid password",
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.json({
            message: "login successful",
            token,
        });


    }catch(error){
        res.status(500).json({
            message: "error",
        });
    }

};