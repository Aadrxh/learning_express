// app.js
const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path=require("node:path");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath)); //middleware to serve static files

app.get("/about", (req, res) => {
  res.render("about");
});

const links = [
  { href: "/", text: "Home" },
  { href: "authors", text: "Authors" },
  { href: "books", text: "BOOks" }
];
const users = ["Rose", "Cake", "mitti"];

app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { links: links,users:users}); //ejs has access to 'message' variable , basically render is ejs's domain
});

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => { // requires four parameters to recognize it as an error-handling middleware function
  console.error(err);
  res.status(500).send(err);
});
