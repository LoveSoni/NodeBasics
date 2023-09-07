const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));// need to add to parse request body

app.use("/addProduct", (request, response, next) => {
    response.send("<form action='/product' method='POST'><input type='text' name='title'></input><button>Add Product</button></form>")
})

app.use("/product", (req, response, next) => {
    // console.log('request body is : ', request.body);  will have to parse the body otherwise it won't work
    // and we need to add a plugin i.e. npm install --save body-parser
    console.log(req.body['title']);
    response.redirect('/');
})

app.use("/", (request, response, next) => {
    response.send('handling all ')
})


app.listen(3000);