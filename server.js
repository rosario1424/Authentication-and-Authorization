// import express module
const express=require('express');
const mongoose=require('mongoose');
require ('dotenv').config();

// create an express application
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello server'});
})

// listing for incoming
app.listen(3001,'localhost', () => {
    console.log(`server is running on http://localhost:3001`);
});

// connect to mongoose
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));