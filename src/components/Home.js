import React, { useState } from 'react';
import Navbar from './Navbar';
import AddBooks from './AddBooks';
import BooksContainer from './BooksContainer';

function Home() {
  const [books, setBooks] = useState([]);

  const delBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div>
      <Navbar />
      <BooksContainer books={books} delBook={delBook} />
      <AddBooks />
    </div>
  );
}

export default Home;
