const express = require('express');
const recipesRoute = express.Router();
const Recipes = require('../models/recipes');

recipesRoute.route('/')
    .get((req, res) => {
        Recipes.find(req.query, (err, recipes) => {
            if (err) return res.status(500).send(err);
            return res.send(recipes);
        });
    })

    .post((req, res) => {
        let newRecipe = new Recipes(req.body);
        newRecipe.save((err) => {
            if (err) return res.status(500).send(err);
            return res.send(newRecipe);
        });
    });

recipesRoute.route('/:id')
    .get((req, res) => {
        Recipes.findById(req.params.id, (err, recipe) => {
            if (err) return res.status(500).send(err);
            return res.send(recipe);
        });
    })
    .delete((req, res) => {
        Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
            if (err) return res.status(500).send(err);
            return res.send(deletedRecipe);
        });
    })
    .put((req, res) => {
        Recipes.findByIdAndRemove(req.params.id, req.body, {new: true}, (err, updatedRecipe) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedRecipe);
        });
    });

    module.exports = recipesRoute;