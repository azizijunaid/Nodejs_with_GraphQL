// Example middleware-based application

const express = require("express");
const app = express();


// Authentication middleware
function authenticate(req, res, next) {
  if (req.headers.authorization === "secret-token") {
    next();
  } else {
    console.log("error 401");
    res.sendStatus(401);
  }
}






// Middleware usage
app.use(authenticate);


// Routes

app.get("/", (req, res) => {
  res.send("<h1>Middle ware 1!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
  //throw new Error('error')
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send(`<h1>${err.message}</h1>`)
  res.sendStatus(500);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
