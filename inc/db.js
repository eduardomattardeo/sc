const mysql = require('mysql2');

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'user',
    database: 'saboroso',
    password: '21072006tamy',
    multipleStatements: true

});

module.exports = connection;

