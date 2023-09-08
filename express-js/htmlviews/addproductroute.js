const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'addproduct.html'))
})

module.exports = router;