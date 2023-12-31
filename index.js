const express = require('express');
const mysql = require('mysql');
const util2 = require('util2');

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

const urlChatBot = 'https://docs.google.com/forms/d/1RXxgioBqS5LBL1W2hkS0P-aBc7vekokTF10wS4hpJVY'
const urlDoctor = 'https://docs.google.com/forms/d/1wLCVgA4cJovf7JZeCLnWQabRbjiZkuszbuMpbdzGGIM'

db.query(`INSERT INTO logs (createdAt, message) VALUES (NOW(), 'Server restarted')`, (err, result) => {
    console.log('Server restarted');
})

app.get('/', async (req, res) => {

    //
    // // pick a random number between 0 and 1
    // let pickedTest = {}
    // let random = Math.random()
    //
    // if (random < 0.5) {
    //     pickedTest = {
    //         url: urlChatBot,
    //         name: 'Chatbot'
    //     }
    // } else {
    //     pickedTest = {
    //         url: urlDoctor,
    //         name: 'Doctor'
    //     }
    // }
    //
    // db.query(`INSERT INTO logs (createdAt, message) VALUES (NOW(), '${pickedTest.name}')`, (err, result) => {
    //     console.log(pickedTest);
    //     res.redirect(pickedTest.url);
    // })

    res.redirect('https://www.menti.com/al4i24ftsguq')
})

app.get('/logs', async (req, res) => {
    db.query(`SELECT message, count(*) as count FROM logs GROUP BY message`, (err, result) => {
        res.send(result);
    })
})

app.listen(4444, () => {
    console.log('Server running on port 4444');
})