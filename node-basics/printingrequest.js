const http = require('http')

const server = http.createServer((request, response) => {
    console.log('MyRequest url is :', request.url);
    console.log('MyRequest method is :', request.method);
    console.log('MyRequest headers are :', request.headers);
})

server.listen(3000);
