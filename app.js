// import express module
const express=require('express');

// create an express application
const app = express();

app.get('/authenticate', (req, res) => {
    res.json({ message: 'Get all user information'});
});

module.exports = app;
