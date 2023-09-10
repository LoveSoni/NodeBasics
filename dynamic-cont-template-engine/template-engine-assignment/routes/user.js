const express = require('express');
const path = require('path');

const router = express.Router();
const users = [];

router.post('/users', (request, response, next) => {
    // response.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
    users.push({ username: request.body['username'] })
    console.log(request.body['username']);
    response.render('user', { usser: users })
})

exports.userRouter = router;
exports.userNameList = users;