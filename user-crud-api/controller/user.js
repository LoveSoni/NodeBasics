'use strict'
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
    const request_first_name = requestBody.first_name;
    const request_email = requestBody.email;
    const request_last_name = requestBody.last_name;
    if (common.check_string_is_empty(request_first_name)) {
        response.status(400).send('First name required')
    }
    else if (common.check_string_is_empty(request_email)) {
        response.status(400).send('Email is required')
    }
    else if (common.check_string_is_empty(request_last_name)) {
        response.status(400).send('last name is required')
    }
    fs.readFile(usersListJsonFile, (error, fileContent) => {
        const userListJSONArray = JSON.parse(fileContent);
        const userData = userListJSONArray.data;
        const maxId = userData.reduce((prev, current) =>
            prev.id > current.id
                ? prev.id
                : current.id);
        userData.push({
            id: maxId + 1,
            email: request_email,
            first_name: request_first_name,
            last_name: request_last_name,
            avatar: `https://reqres.in/img/faces/${maxId + 1}-image.jpg`
        });
        userListJSONArray.data = userData;
        fs.writeFile(usersListJsonFile, JSON.stringify(userListJSONArray), (err) => {
            console.log(err);
        });
        response.status(201).send('User Created Successfully');
    });
}


exports.deleteUser = (request, response, next) => {
    const userId = request.params.userId;
    fs.readFile(usersListJsonFile, (error, fileContent) => {
        const userJsonArray = JSON.parse(fileContent);
        const userData = userJsonArray.data;
        const updatedUserObject = userData.filter((data) => data.id != userId);
        userJsonArray.data = updatedUserObject;
        fs.writeFile(usersListJsonFile, JSON.stringify(userJsonArray), (err) => {
            // console.log(err);
        });
        response.status(204).send('');
    })

}

exports.updateUserDetails = (request, response, next) => {
    const userId = request.params.userId;

}