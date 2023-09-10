const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const userRouter = require('./routes/user')

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homeRouter.homeRouter);
app.use(userRouter.userRouter);

app.listen(3000);