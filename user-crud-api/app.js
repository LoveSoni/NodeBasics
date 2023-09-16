const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const errorRoute = require('./routes/error');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Users API",
            description: "Users API Information",
            contact: {
                name: "Love"
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ['./routes/*.js']
    // apis: ["app.js"]
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoute.userRouter);


app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(errorRoute.errorRouter);
app.listen(3000);