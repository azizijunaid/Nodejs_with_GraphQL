const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');

// Initiate expresss
const app = express();

// Log every request
app.use(logger('dev'));

// Parse request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup Cors
const corsOption = {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    exposedHeaders: [
        "Authorization",
        "Content-Type",
        "x-auth-token",
        "authorization"
    ],
    credentials: true
};
app.use(cors(corsOption));

app.use(require("./routes/index"));

// Index route
// app.get('/', function (req, res) {
//     res.send('Welcome to the beginning of nothingness');
// });

// Server setup
const server = http.createServer(app);
server.listen(3000);

module.exports = app;