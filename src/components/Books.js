import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ book }) => (
  <div className="book-card">
    <h2>
      this is
      {book}
    </h2>
  </div>
);

Books.propTypes = {
  book: PropTypes.string.isRequired,
};

export default Books;
