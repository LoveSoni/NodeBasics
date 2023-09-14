const path = require('path');
const fs = require('fs');
const filePath = require('../utils/filepath');
const common = require('../utils/common');

const usersListJsonFile = filePath.getDataFilesPath('userList.json');

exports.getUerList = (request, response, next) => {
    response.sendFile(usersListJsonFile);
}

exports.getUserDetails = (request, response, next) => {
    const userId = request.params.userId;
    console.log('user id ', userId);
    fs.readFile(usersListJsonFile, (error, fileContent) => {
        const userData = JSON.parse(fileContent).data;
        const userIdData = (userData.filter((usrObject) => { return (usrObject.id == userId) })).map((data) => JSON.
            stringify(data));
        console.log('useriddata', userIdData != null);
        if (userIdData.length) {
            const userIdDataObject = JSON.parse(userIdData); response.send(userIdDataObject);
        } else {
            response.status(404).header('Content-Type', 'application/json').send('{}')
        }
    });
}



exports.createUser = (request, response, next) => {
    const requestBody = request.body;
    if (common.check_string_is_empty(requestBody.first_name)) {
        response.status(400).send('First name required')
    }
    else if (common.check_string_is_empty(requestBody.email)) {
        response.status(400).send('Email is required')
    }
    else if (common.check_string_is_empty(requestBody.last_name)) {
        response.status(400).send('last name is required')
    }
}