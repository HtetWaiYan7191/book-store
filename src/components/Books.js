import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../features/books/booksSlice';

function Books({ book }) {
  const dispatch = useDispatch();
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
      <button type="button" onClick={(e) => { e.preventDefault(); dispatch(removeBookFromApi(book.item_id)); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Remove Book
      </button>
    </div>
  );
}

Books.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Books;
