const bodyParser = require("body-parser");
const express = require('express');

const adminroute = require('./admin');
const shoproute = require('./shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminroute);
app.use(shoproute);

/*
adding 404 page
*/
app.use((request, response, next) => {
    response.status(401).send('<h2>404 Page Not Found</h2>')
})

app.listen(3000);