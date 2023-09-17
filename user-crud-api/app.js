const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const errorRoute = require('./routes/error');
// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
const app = express();




// const swaggerDocs = swaggerJsdoc(swaggerOptions);

const { swaggerServe, swaggerSetup } = require('./swagger/config')
app.use("/api-docs", swaggerServe, swaggerSetup);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoute.userRouter);


app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(errorRoute.errorRouter);
app.listen(3000);