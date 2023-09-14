const express = require('express');
const errorController = require('../controller/error');

const router = express.Router();

router.use('/', errorController.error_404);

exports.errorRouter = router;