import React from 'react';
import PropTypes from 'prop-types';

const Books = ({
  book, author, id, delBook,
}) => (
  <div className="book-card flex justify-around border border-1 py-5 my-5">
    <h2>
      This is
      {' '}
      {book}
      {' '}
      by
      {' '}
      {author}
    </h2>
    <button type="button" onClick={() => delBook(id)} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Remove Book</button>
  </div>
);

Books.propTypes = {
  book: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  delBook: PropTypes.func.isRequired,
};

export default Books;
