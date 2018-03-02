const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const recipesRoutes = require('./routes/recipes');
const menuRoutes = require('./routes/menu');
const config = require('./config');
const expressJwt = require("express-jwt");

const app = express();

mongoose.connect('mongodb://localhost:27017/recipes', (err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

app.use(bodyParser.json());
app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use('/api/recipes', recipesRoutes);
app.use('/api/menu', menuRoutes);

app.listen(config.port, () => {
    console.log('Listening on port' + config.port);
});