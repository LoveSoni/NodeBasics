const fs = require('fs');

function requestHandlers(request, response) {
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
        let requestBody = [];
        request.on('data', function (datachunk) {
            console.log('chunk ', datachunk);
            requestBody.push(datachunk);
        })
        console.log('data chunk is : ', requestBody)
        request.on('end', () => {
            const parsedBody = Buffer.concat(requestBody).toString();
            console.log('parsed body is ', parsedBody);
            fs.writeFileSync('./capturedinputtexst.txt', parsedBody, (error) => {
                response.statusCode = 302;
                // redirecting url
                response.setHeader('Location', '/');
                response.end();
            });

        })


    }
}


module.exports = requestHandlers;