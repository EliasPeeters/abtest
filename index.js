const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'eliaspeeters.de',
    user: 'testuser',
    password: 'test1234',
    database: 'database',
    port: '3310',
    charset: 'utf8mb4'
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
})

app = express();

app.get('/', (req, res) => {
    db.query('INSERT INTO logs (createdAt, message) VALUES (NOW(), "test")', (err, result) => {
        console.log(result);
        res.send('Hello World');
    })
})

app.listen(4444, () => {
    console.log('Server running on port 3000');
})