const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (request, response, next) => {
    response.status(200).sendFile(path.join(__dirname, 'shop.html'))
})

module.exports = router; ``