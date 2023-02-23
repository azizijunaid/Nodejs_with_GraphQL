module.exports = function erroHandling(err, req, res, next) {
  console.error(err.stack);
  res.send(`<h1>${err.message}</h1>`);
  res.sendStatus(500);
};
