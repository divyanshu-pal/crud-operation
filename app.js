const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

const userr = require('./route/rout');

app.use('/api',userr);





module.exports = app;