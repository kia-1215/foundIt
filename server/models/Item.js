const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    location: String,
    dateLost: Date,
    status: {
        type: String,
        default: "Lost",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Item", itemSchema);