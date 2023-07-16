import React, { useState } from 'react';
import Navbar from './Navbar';
import AddBooks from './AddBooks';
import BooksContainer from './BooksContainer';

function Home() {
  const [books, setBooks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const delBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   addBook(input);
  // };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
      <BooksContainer books={books} delBook={delBook} />
      <AddBooks />
    </div>
  );
}

export default Home;
