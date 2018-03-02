const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    day: String,
    recipeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipes"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Menu", MenuSchema);