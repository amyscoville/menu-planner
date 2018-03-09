const express = require('express');
const userRoute = express.Router();
const expressJwt = require("express-jwt");

const User = require('../models/user');

userRoute.route("/")
    .get((req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                res.status(500).send({success: false, err})
            } else {
                res.status(200).send({success: true, users})
            }
        })
    })

userRoute.use(expressJwt({secret: process.env.SECRET}));

userRoute.route("/verify")
    .get((req, res) => {
        User.findById(req.user._id, (err, user) => {
            if (err) {
                res.status(500).send({success: false, err})
            } else if (user === null) {
                res.status(400).send({success: false, err})
            } else {
                res.status(200).send({success: true, user: user})
            }
        })
    })


userRoute.route("/profile")
.get((req, res) => {
    User.findById(req.user._id, (err, user) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(user);
    });
})


userRoute.put("/edit", (req, res) => {
    User.findByIdAndUpdate(req.user._id, req.body, {
        new: true
    }, (err, updatedUser) => {
        if (err) 
            return res.status(500).send(err)
        return res.send(updatedUser);
    })
});


userRoute.delete("/delete", (req, res) => {
    User.findByIdAndRemove(req.user._id, (err, deletedUser) => {
        if (err) 
            return res.status(500).send(err)
        return res.send('Thank you.  Your request was recieved and your account has been deleted')
    })
})

module.exports = userRoute