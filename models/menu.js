const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    day: String,
    recipeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipes"
    }
});

module.exports = mongoose.model("Menu", MenuSchema);