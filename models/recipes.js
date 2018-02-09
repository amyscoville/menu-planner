const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    ingredients: [{
        ingName: String,
        amount: Number,
        unit: String
    }],
    directions: String,
    cookTime: String
});

module.exports = mongoose.model("Recipes", RecipeSchema);