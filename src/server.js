const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const { server } = require("./apollo-server");

// Initiate expresss

// Log every request

const app = express();

app.use(logger("dev"));

// Parse request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup Cors
const corsOption = {
  origin: "*",
};

app.use(cors(corsOption));

app.use(require("./routes/index"));

server.start().then(() => {
  server.applyMiddleware({ app, path: "/graphql" });
});
// Index route
app.get("/", function (req, res) {
  res.send("Welcome to the beginning of nothingness");
});
app.listen(4000);

module.exports = app;
