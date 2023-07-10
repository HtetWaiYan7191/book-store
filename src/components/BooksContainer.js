import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

const BooksContainer = ({ books, delBook }) => (
  <div className="book-container  w-[65%] mx-auto my-10">
    {books.map((book) => (
      <Books key={book.id} book={book.title} author={book.author} delBook={delBook} id={book.id} />
    ))}
  </div>
);

BooksContainer.propTypes = {
  books: PropTypes.string.isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BooksContainer;
