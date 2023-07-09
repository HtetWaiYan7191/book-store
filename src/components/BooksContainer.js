import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

const BooksContainer = ({ books }) => (
  <div className="book-container  w-[65%] mx-auto my-10">
    {books.map((book) => (
      <Books key={book.id} book={book.title} author={book.author} />
    ))}
  </div>
);

BooksContainer.propTypes = {
  books: PropTypes.string.isRequired,
};

export default BooksContainer;
