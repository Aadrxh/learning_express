const { Router } = require("express");

const authorRouter = Router();
const { getAuthorByIdfromURL} = require("../controllers/authorController");


// authorRouter.get("/", (req, res) => {
//   res.render("author");  // this file includes navbar + footer
// });

// only one get at a time


authorRouter.get("/", (req, res) => {
  res.send(`
    All authors!<br>
    <a href="/books">Book page</a><br>
    <a href="/authors">Author page</a><br>
    <a href="/">Index page</a>
  `);
});
authorRouter.get("/:authorId",getAuthorByIdfromURL);

module.exports = authorRouter;