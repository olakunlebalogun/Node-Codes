const express = require('express');
const app = express();
const path = require("path");
const ejs = require("ejs");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));


app.get('/', (req, res, next) => {
    res.render('index')
})

const entranceRoute = require('./routes/entrance_route')
app.use('/entrance', entranceRoute)



module.exports = app;