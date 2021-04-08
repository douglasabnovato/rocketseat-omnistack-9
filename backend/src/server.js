const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json('douglasabnovato, o @ fullstack react brabo !!!');
});

app.listen(3333);