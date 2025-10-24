const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send(`
    Welcome to the homepage!<br>
    <a href="/books">Book page</a><br>
    <a href="/authors">Author page</a><br>
    <a href="/">Index page</a>
  `);
});

module.exports = indexRouter;
