const express = require('express');

const router = express.Router();

router.get("/", (request, response, next) => {
    response.send('handling all ')
})

module.exports = router;