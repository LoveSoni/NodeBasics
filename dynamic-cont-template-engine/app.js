const express = require('express');
const bodyParser = require('body-parser');
const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views'); // 2nd argument views is the folder name where we are gona keep pub file

app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRouter);
app.use(adminRouter.router);
app.use(express.static('public'))

app.use('/', (request, response, next) => {
    response.status(401).render('404');
})
app.listen(3000);
