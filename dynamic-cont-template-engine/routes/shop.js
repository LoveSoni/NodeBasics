const express = require('express');
const path = require('path');
const adminData = require('./admin')


const router = express.Router();

router.get('/', (request, response, next) => {
    console.log('Addded products are : ', adminData.productsList);
    // response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // to use pug file we have to use the render method
    response.render('shop', { prods: adminData.productsList, hasProds: adminData.productsList.length > 0 });// we don't to specify the full path(including folder) because we have set it already in our app.js file under views key (app.set('views', 'views');)
});

module.exports = router; 