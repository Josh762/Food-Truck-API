const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Import project config file
const config = require('./config');

// Initialize app constants
const port = config.app.port;
const dbConnectString = config.db.connectionString;

// Initialize express object
const app = express();

// Register middlewares
app.use(bodyParser.json());

// Connect to database
mongoose.connect(dbConnectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Start the server
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
