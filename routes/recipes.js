const express = require('express');
const recipesRoute = express.Router();
const Recipes = require('../models/recipes');

recipesRoute.route('/')
    .get((req, res) => {
        Recipes.find({user: req.user._id}, (err, recipes) => {
            if (err) return res.status(500).send(err);
            return res.send(recipes);
        });
    })

    .post((req, res) => {
        let newRecipe = new Recipes(req.body);
        newRecipe.user = req.user._id;
        newRecipe.save((err) => {
            if (err) return res.status(500).send(err);
            return res.send(newRecipe);
        });
    });

recipesRoute.route('/:id')
    .get((req, res) => {
        Recipes.findById({_id: req.params.id, user: req.user._id}, (err, recipe) => {
            if (err) return res.status(500).send(err);
            return res.send(recipe);
        });
    })
    .delete((req, res) => {
        Recipes.findByIdAndRemove({_id: req.params.id, user: req.user._id}, (err, deletedRecipe) => {
            if (err) return res.status(500).send(err);
            return res.send(deletedRecipe);
        });
    })
    .put((req, res) => {
        Recipes.findByIdAndUpdate({_id: req.params.id, user: req.user._id}, req.body, {new: true}, (err, updatedRecipe) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedRecipe);
        });
    });

    module.exports = recipesRoute;