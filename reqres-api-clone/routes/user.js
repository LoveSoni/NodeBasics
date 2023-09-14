const express = require('express');
const userController = require('../controller/user');
const router = express.Router();

router.get('/users', userController.getUerList)

router.get('/users/:userId', userController.getUserDetails);

exports.userRouter = router;