const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
const employeeController = require('./controllers/employeeController');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);