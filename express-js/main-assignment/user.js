const express = require('express');
const router = express.Router();

router.get('/users', (request, response, next) => {
    response.send('This is users page')
})

module.exports = router;