'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add-product', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'addproduct.html'))
})

app.get('/', (request, response, next) => {
    console.log(path.join(__dirname));
    response.sendFile(path.join(__dirname, 'shop.html'));
})

app.use((request, response, next) => {
    response.status(404).sendFile(path.join(__dirname, '404notfound.html'))
})

app.listen(3000);