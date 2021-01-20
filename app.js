const express = require('express');
const bodyParser = require('body-parser');

// Initialize app constants
const port = 3000; // TODO pull correct port from config file when implemented or default to 3000

// initialize express object
const app = express();

// Register middlewares
app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
