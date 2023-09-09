const express = require('express');
const path = require('path');
const router = express.Router();

const addedProduct = [];

router.get('/add-product', (request, response, next) => {
    response.sendFile(path.join(__dirname, '../', 'views', 'admin.html'));
});

router.post('/add-product', (request, response, next) => {
    response.status(302);
    addedProduct.push({ title: request.body['value'] });
    response.redirect("/");
});



// module.exports = router; 
exports.router = router;
exports.productsList = addedProduct;