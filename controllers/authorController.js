// controllers/authorController.js

const db = require("../db");

const CustomNotFoundError = require("../errors/customNotFoundError");


async function getAuthorByIdfromURL(req, res) {
  const { authorId } = req.params; // whatever the user has put in the URL , for this http://localhost:3000/authors/2 , req.params={ authorId: '2' }

  try{
  const author = await db.getAuthorById(Number(authorId));

  if (!author) {                         //cases where author is not found
    throw new CustomNotFoundError("Author not found");
    return;
  }

  res.send(`Author Name: ${author.name}`);
}

  catch(error){                           //cases where there is some error in the server or database
    console.error("Error retrieving author",error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getAuthorByIdfromURL };
 