const express = require('express');
let books = require("./booksdb.js");
const { restart } = require('nodemon');
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  // Fetch all books, convert to JSON string and send string as a response
  const booksJSON = JSON.stringify(books); 
  res.send(booksJSON); 
  return res.status(300).json({message: "No Books Found"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = parseInt(req.params.isbn, 10);
    const book = books[isbn];
    
    if (book) {
        res.json(book);
    } else {
        res.status(300).json({ error: 'Book not found' });
    }
});
  
// Get book details by author
public_users.get('/author/:author', function (req, res) {
    const author = req.params.author.toLowerCase();
    const bookDetails = [];

    for (const key in books) {
        if (books[key].author.toLowerCase() === author) {
            bookDetails.push(books[key]);
        }
    }

    if (bookDetails.length > 0) {
        res.json(bookDetails);
    } else {
        res.status(404).json({ error: 'No books found by this author' });
    }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
