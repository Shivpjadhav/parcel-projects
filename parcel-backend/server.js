const express = require('express');
const mongoose = require('mongoose');
 
const app = express();
app.use(express.json());

// CONNECT DATABASE
mongoose.connect('YOUR_MONGODB_CONNECTION_STRING')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err)); 
