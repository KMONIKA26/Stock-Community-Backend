const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();

connectDB();
app.use(express.json());
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
