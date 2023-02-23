// Authentication middleware
module.exports =  authenticate = (req, res, next) => {
    if (req.headers.authorization === "secret-token") {
      next();
    } else {
      console.log("error 401");
      res.sendStatus(401);
    }
  }