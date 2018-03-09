const express = require('express');
const menuRoute = express.Router();
const Menu = require('../models/menu');

//get all menu items

menuRoute.route('/')
    .get((req, res) => {
        let query = Object.assign(req.query, {user: req.user._id})
        Menu.find(query).populate("recipeId", "name imgUrl cookTime").exec((err, menuItems) => {
            if (err) return res.status(500).send(err);
            return res.send(menuItems);
        });
    });

menuRoute.route("/:day")
    .put((req, res) => {
        let { day } = req.params;
        Menu.findOneAndUpdate({ day }, req.body, { new: true, upsert: true }).populate("recipeId", "name imgUrl cookTime").exec((err, foundDay) => {
            if (err) {
                console.error(err);
            } else {
                return res.send(foundDay);
            }
        })
    });

module.exports = menuRoute;