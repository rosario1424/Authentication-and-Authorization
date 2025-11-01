// import express module
const express=require('express');
const authRouter = require('./routes/authRoutes');

// create an express application
const app = express();

app.use('/', authRouter);

module.exports = app;
