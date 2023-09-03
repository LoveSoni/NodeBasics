'use strict';

const http = require('http');

const server = http.createServer((request, response) => {
    console.log('server is up and running');
    // set response headers
    response.setHeader('Content-Type', 'text/html');
    response.write("<h2>without heading</h2>")
    response.end();
    // response.write("{ 'user': 'love' }")
})
server.listen(3000);