'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const addproductroute = require('./addproductroute');
const shoproute = require('./shoproute');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(addproductroute);
app.use(shoproute);

app.use((request, response, next) => {
    response.sendFile(path.join(__dirname, '404notfound.html'));
})


app.listen(3000);