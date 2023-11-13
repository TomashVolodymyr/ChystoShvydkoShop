const express = require('express');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const dotenv = require("dotenv");
const path = require('path');


// Load environment variables from .env file
dotenv.config();
const dbURI = process.env.MONGODB_URL || '';
const PORT = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(express.json());
app.use(express.static('public'));


// database connection
const options = {
    key: fs.readFileSync('ssl/private.key'),
    cert: fs.readFileSync('ssl/certificate.pem')
};

mongoose.connect(dbURI, { useUnifiedTopology: true })
    .then((result) => https.createServer(options, app).listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }))
    .catch((err) => console.log(err));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


