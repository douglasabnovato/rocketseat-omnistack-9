const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello world douglasabnovato');
});

app.listen(3333);