const mysql = require('mysql2');

const pool = mysql.createPool(
    {
        host: '127.0.0.1',
        database: 'node_complete',
        user: 'root',
        password: 'Monster123@energy'
    }
);

exports.mysqlpool = pool.promise();