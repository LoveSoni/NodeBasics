const express = require('express');
const bodyParser = require('body-parser');
const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');
// const expressHandleBars = require('express-handlebars');
const app = express();

// app.set('view engine', 'pug');

// app.engine('hbs', expressHandleBars()); // name i.e. handlebars it could be any name, and whatever name 
// we define our that should be our file handlebars file name as well. e.g. shop.hbs
// app.set('view engine', 'hbs');

app.set('view engine', 'ejs');
app.set('views', 'views'); // 2nd argument views is the folder name where we are gona keep pub file

app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRouter);
app.use(adminRouter.router);
app.use(express.static('public'))

app.use('/', (request, response, next) => {
    response.status(401).render('404', { pageTitle: 'Page Not Found' });
})
app.listen(3000);
