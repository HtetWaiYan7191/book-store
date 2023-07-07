import React, { useState } from 'react';
import Navbar from './Navbar';
import AddBooks from './AddBooks';
import BooksContainer from './BooksContainer';

function Home() {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState('');
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    setBookTitle(e.target.value);
  };

  const handleSubmit = () => {
    setBooks((prevState) => [...prevState, bookTitle]);
    setInput('');
    console.log(books);
  };

  return (
    <div>
      <Navbar />
      <BooksContainer books={books} />
      <AddBooks
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
    </div>
  );
}

export default Home;
