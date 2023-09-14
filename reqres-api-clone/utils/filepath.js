const path = require('path');

exports.getDataFilesPath = (myFileName) => {
    return path.join(path.dirname(process.mainModule.filename), 'data', myFileName);
}