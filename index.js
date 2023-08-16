const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(4444, () => {
    console.log('Server running on port 3000');
})