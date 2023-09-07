const express = require('express');

const app = express();

// app.use('/', (request, response, next) => {
//     console.log('hey this is first handler');
//     next();
// })

// app.use('/', (request, response, next) => {
//     response.send('hey this is second handler');
// })


app.use('/users', (request, response, next) => {
    response.send({ 'name': 'love', 'email': 'love.love@gmail.com' });
})

app.use('/', (request, response, next) => {
    response.send('hey how are you doing');
})

app.listen(3000);