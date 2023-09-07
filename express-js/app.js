const http = require('http');
const expressimport = require('express');


//our express library exports a function, so we have added () to invoke that

const app = expressimport();
// here app is the valid request/response handler so we can directly pass it to createServer function

app.use((request, response, next) => {
    console.log('in my middleware')
    response.statusCode = 200;
    // response.end();
    next(); // this allows request to contine to the next middleware in line
})

// we can have multiple app request handler e.g. 
// but this won't be called until we have next() call in the first request handler
app.use((request, response, next) => {
    console.log('in another middleware');
    response.send({ 'username': 'love' });

})

// const server = http.createServer(app);
// server.listen(3000);
// note: we can directly call app server
app.listen(3000);