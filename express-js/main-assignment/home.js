const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'homepage.html'))
})

module.exports = router;