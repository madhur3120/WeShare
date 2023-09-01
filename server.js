const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
}
app.use(cors(corsOptions));
app.use(express.json());


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/api/files', require('./routes/file-route'))
app.use('/files', require('./routes/show'))
app.use('/files/download', require('./routes/download'));


app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})