const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json('douglasabnovato é brabo fazendo o back !');
});

app.listen(3333);