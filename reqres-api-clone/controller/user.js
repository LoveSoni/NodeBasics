const path = require('path');


exports.getUerList = (request, response, next) => {
    response.sendFile(path.join(path.dirname(process.mainModule.filename), 'data', 'userList.json'));
}