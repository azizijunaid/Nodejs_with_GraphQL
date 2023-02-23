/**
 * -------------- Example middleware-based application  ----------------
 */

const express = require("express");
const app = express();
// const authenticate = require("./middleware/route-authenticate");
// const errorHandling = require("./middleware/errorMiddleware");

/**
 * -------------- route authenticate middleware  ----------------
 */

// const authenticate = (req, res, next) => {
//   if (req.headers.authorization === "secret-token") {
//     next();
//   } else {
//     console.log("error 401");
//     res.sendStatus(401);
//   }
// };

/**
 * -------------- Middleware usage ----------------
 */

// app.use(authenticate);

/**
 * -------------- Routes ----------------
 */

app.get("/", (req, res) => {
  res.send("<h1>Middle ware 1!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
  //throw new Error('error')
});

// Application-level middleware
app.use(express.json()); // parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // parse incoming requests with URL-encoded payloads

app.post("/login", (req, res) => {
  console.log(req.body)
  res.send(req.body);
});

/**
 * -------------- Middlware Order of execution ----------------
 */

// app.use((req, res, next) => {
//   console.log("First middleware function");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second middleware function");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

/**
 * -------------- Error handling middleware ----------------
 */

//app.use(errorHandling);

// app.use((err, req, res, next) => {
//   if (req.headers.authorization === "secret-token") {
//     next();
//   } else {
//     console.log("error 401");
//     res.sendStatus(401);
//   }
// });

/**
 * -------------- server listen on port 3000 ----------------
 */

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
