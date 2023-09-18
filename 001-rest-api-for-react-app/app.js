const express = require('express')
const bodyParser = require('body-parser');
const feedRoute = require('./routes/feed');

const app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE', 'PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/feed', feedRoute.feedRouter);


app.listen(4000);