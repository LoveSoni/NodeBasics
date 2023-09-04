'use strict'
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const url = request.url;
    console.log('url is ', request.url);
    console.log('method is', request.method);
    const method = request.method;
    if (url === '/') {
        response.write('<html>')
        response.write('<head>')
        response.write('</head>')
        response.write('<body>')
        response.write("<form action='/message' method='post'><input type='text' name='capturedmessage'></input><button id='send'>Send</button></form>")
        response.write('</body>');
        response.write('</html>');
        response.end();
    }

    else if (url === '/message' && method === 'POST') {
        console.log('inside method url');
        console.log('request is : ', request);
        fs.writeFileSync('./capturedinputtexst.txt', 'test');
        response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();
    }
})
server.listen(3000);