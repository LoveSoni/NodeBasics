const express = require('express')
const bodyParser = require('body-parser');
const feedRoute = require('./routes/feed');

const app = express();
app.use(bodyParser.json());
app.use('/feed', feedRoute.feedRouter);


app.listen(4000);