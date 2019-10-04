const express = require('express');

const app = express();

app.get('/', (req,res) => {
    return res.send('Welcome Omnistack 9.0 !!');
});

app.listen(3333);