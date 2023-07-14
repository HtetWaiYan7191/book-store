import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../features/books/booksSlice';

function Books({ book }) {
  console.log(book);
  const dispatch = useDispatch();
  const removeBook = (book) => {
    dispatch(removeBookFromApi(book));
  };
  return (
    <div className="book-card flex justify-between border border-1 py-5 my-5">
      <h2>
        This is
        {' '}
        {book.title}
        {' '}
        by
        {' '}
        {book.author}
      </h2>
      <button type="button" onClick={(e) => { e.preventDefault(); removeBook(book); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Remove Book
      </button>
    </div>
  );
}

Books.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Books;
