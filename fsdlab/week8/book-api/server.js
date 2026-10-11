
const express = require('express');

const app = express();
app.use(express.json());

let books = [
  { id: 1, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' }
];

let nextId = 3;

// GET: Display all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET: Display a book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === Number(req.params.id));

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json(book);
});

// POST: Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: 'Title and author are required'
    });
  }

  const newBook = {
    id: nextId++,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT: Update a book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === Number(req.params.id));

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: 'Title and author are required'
    });
  }

  book.title = title;
  book.author = author;

  res.json(book);
});

// DELETE: Remove a book
app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(
    b => b.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(index, 1);
  res.json({ message: 'Book deleted successfully' });
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
