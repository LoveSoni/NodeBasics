const http = require('http');


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.end('hey');
})

server.listen(3000);