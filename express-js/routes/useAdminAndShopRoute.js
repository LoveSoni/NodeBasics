const bodyParser = require("body-parser");
const express = require('express');

const adminroute = require('./admin');
const shoproute = require('./shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminroute);
app.use(shoproute);



app.listen(3000);