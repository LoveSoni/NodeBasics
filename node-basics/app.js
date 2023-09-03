const http = require('http');

// function reqListener(request, response) {

// }

// http.createServer(reqListener)
// or define reqListner callback function in createserver only
const server = http.createServer((request, response) => {
    console.log('request is :', request);
    console.log('response is :', response);
});

// console.log(server.address().port);
server.listen(3000);
process.exit();