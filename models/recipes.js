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
    cookTime: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Recipes", RecipeSchema);