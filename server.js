const express = require('express');
require('dotenv').config();
const app = express();

const connectDB = require('./config/db');
connectDB();

app.use('/api/files', require('./routes/file-route'))

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})