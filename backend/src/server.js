const express = require('express');
const mongoose = require('mongoose');
const routes = require('routes');

const app = express();

mongoose.connect('mongodb+srv://dbAircnc:douglas1234@cluster0.yg58x.mongodb.net/dbAircnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3333); 

/** configuração inicial funcionando

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({ message: "Hello World."})
});

app.listen(3333);*/