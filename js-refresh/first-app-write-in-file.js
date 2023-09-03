'use strict';
const fileSystem = require('fs');
console.log('hello from nodejs');
fileSystem.writeFileSync('./test.txt', 'hello from nodejs');