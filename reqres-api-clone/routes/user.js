const express = require('express');
const userController = require('../controller/user');
const router = express.Router();

router.get('/users', userController.getUerList)

exports.userRouter = router;