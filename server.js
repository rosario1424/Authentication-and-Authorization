
const mongoose=require('mongoose');
const app = require('./app');
require ('dotenv').config();

// connect to mongoose
mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    // listing for incoming
app.listen(3001,'localhost', () => {
    console.log(`server is running on http://localhost:3001`);
});
})
.catch((err) => console.error('Could not connect to MongoDB', err));