const path = require('path');
const fs = require('fs');
const filePath = require('../utils/filepath');

const usersListJsonFile = filePath.getDataFilesPath('userList.json');

exports.getUerList = (request, response, next) => {
    response.sendFile(usersListJsonFile);
}

exports.getUserDetails = (request, response, next) => {
    const userId = request.params.userId;
    console.log('user id ', userId);
}