const express = require('express');
const router = express.Router()





router.get("/addProduct", (request, response, next) => {
    response.send("<form action='/product' method='POST'><input type='text' name='title'></input><button>Add Product</button></form>")
})

router.post("/product", (req, response, next) => {
    // console.log('request body is : ', request.body);  will have to parse the body otherwise it won't work
    // and we need to add a plugin i.e. npm install --save body-parser
    console.log(req.body['title']);
    response.redirect('/');
})

module.exports = router;

