import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

const BooksContainer = ({ books }) => (
  <div className="book-container">
    {books.map((book) => (
      <Books key={book} book={book} />
    ))}
  </div>
);

BooksContainer.propTypes = {
  books: PropTypes.string.isRequired,
};

export default BooksContainer;
