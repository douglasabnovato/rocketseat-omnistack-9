const express = require('express');

const app = express();

app.post('/users', (req,res) => {
    return res.json({message: "Welcome Omnistack 9.0!!"});
});

app.listen(3333);