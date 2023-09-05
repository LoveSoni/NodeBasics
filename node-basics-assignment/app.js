const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    console.log('Request url is ', url);
    if (url === '/') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>')
        response.write('<head>'); response.write('</head>')
        response.write('<body>')
        response.write('<h2>Hey welcome here<h2>');
        response.write("<form method='post' action='/create-user'><label>Enter Username</label><input name='username'></input><button>Submit</button></form>");
        response.write('<body>')
        response.write('<html>')
        response.end();
    }
    else if (url === '/users') {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;
        response.write('<html>')
        response.write('<head>'); response.write('</head>')
        response.write('<body>')
        response.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li><li>User 5</li><ul>');
        response.write('<body>')
        response.write('<html>')
        response.end();
    }
    else if (url === '/create-user' && method === 'POST') {
        let requestBody = [];
        request.on('data', function (datachunk) {
            console.log('chunk ', datachunk);
            requestBody.push(datachunk);
        })

        request.on('end', () => {
            const parsedBody = Buffer.concat(requestBody).toString();
            console.log('username is :', parsedBody);
            response.statusCode = 302;
            response.setHeader('Location', '/');
        })
    }
});

server.listen(3000);
