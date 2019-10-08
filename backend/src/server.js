const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-oikjh.mongodb.net/test?retryWrites=true&w=majority')

app.use(express.json());
app.use(routes);

app.listen(3333);