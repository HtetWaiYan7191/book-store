import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import AddBooks from './AddBooks';
import BooksContainer from './BooksContainer';

function Home() {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState('');
  const [input, setInput] = useState('');
  const [author, setAuthor] = useState('htet');
  const [warmMessage, setWarmMessage] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    setBookTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const addBook = (title) => {
    if (title.trim()) {
      const newBook = {
        id: uuidv4(),
        title: bookTitle,
        author,
      };
      setBooks((prevState) => [...prevState, newBook]);
      setInput('');
      setWarmMessage('');
    } else {
      setWarmMessage('You have to add something');
    }
  };

  const delBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addBook(input);
  };

  return (
    <div>
      <Navbar />
      <BooksContainer books={books} delBook={delBook} />
      <AddBooks
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
        author={author}
        handleAuthor={handleAuthor}
        warmMessage={warmMessage}
      />
    </div>
  );
}

export default Home;
