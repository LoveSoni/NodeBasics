const express = require('express');


const app = express();

app.use("/testingpage", (request, response, next) => {
    response.send('handler from testing page')
})

app.use("/", (request, response, next) => {
    response.send('handling all ')
})


app.listen(3000);