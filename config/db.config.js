const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'celi@mysql2022',
    port: 3306,
    database: 'plant_mama'
});

global.db = pool.promise();