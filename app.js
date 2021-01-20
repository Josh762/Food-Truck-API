const express = require('express');
const bodyParser = require('body-parser');


// Import project config file
const config = require('./config');

console.log("***", config);
// Initialize app constants
const port = config.app.port;

// initialize express object
const app = express();

// Register middlewares
app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
