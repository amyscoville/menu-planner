const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressJwt = require("express-jwt");
const authRoutes = require('./routes/auth');
const userRoute = require('./routes/user');
const recipesRoutes = require('./routes/recipes');
const menuRoutes = require('./routes/menu');

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/recipes', (err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});


app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use('/api/recipes', recipesRoutes);
app.use('/api/menu', menuRoutes);

app.use('/auth', authRoutes);
app.use('/user', userRoute);

app.listen(config.port, () => {
    console.log('Listening on port' + config.port);
});