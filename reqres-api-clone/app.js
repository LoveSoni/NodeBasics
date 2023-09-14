const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const errorRoute = require('./routes/error');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoute.userRouter);
app.use(errorRoute.errorRouter);

app.set('view engine', 'ejs');
app.set('views', 'views');



app.listen(3000);