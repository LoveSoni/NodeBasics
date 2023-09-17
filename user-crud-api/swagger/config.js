const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require('path');
console.log(path.join(__dirname, "api.yaml"))
const swaggerJSDocs = YAML.load(path.join(__dirname, "api.yaml"));

const options = {
    customCss: `img {content:url(\'../logo.svg\'); height:auto;} `,
    customfavIcon: "../favicon.ico",
    customSiteTitle: "User CRUD OPerations API Doc",

};

//   module.exports = { swaggerServe: swaggerUI.serve, swaggerSetup: swaggerUI.setup(swaggerJSDocs) };

module.exports = { swaggerServe: swaggerUI.serve, swaggerSetup: swaggerUI.setup(swaggerJSDocs, options) };