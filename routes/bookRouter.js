const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send(`
    All books!<br>
    <a href="/books">Book page</a><br>
    <a href="/authors">Author page</a><br>
    <a href="/">Index page</a>
  `);
});

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

module.exports = bookRouter;
