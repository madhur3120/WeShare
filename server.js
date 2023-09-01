const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

//Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/api/files', require('./routes/file-route'))
app.use('/files', require('./routes/show'))
app.use('/files/download', require('./routes/download'));


app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})