const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const homeRouter = require('./home');
const userRouter = require('./user')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRouter);
app.use(userRouter);

app.listen(3000);