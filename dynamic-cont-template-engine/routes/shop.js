const express = require('express');
const path = require('path');
const adminData = require('./admin')


const router = express.Router();

router.get('/', (request, response, next) => {
    console.log('Addded products are : ', adminData.productsList);
    response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router; 