const express = require('express')
const mysqlConnector = require('./utils/mysqldb');

const app = express();

app.get('/', (request, response, next) => {
    response.json({ msg: 'Welcome sir to my world' })
})


const mysqlDb = mysqlConnector.mysqlpool;

// fetch value
mysqlDb.execute('select * from users').then((res) => console.log(res));

// insert value
mysqlDb.execute('insert into users(email,first_name, last_name) values(?,?,?)', ['randomeail', 'randomfirstname', 'randomlastname']);

app.listen(8080);