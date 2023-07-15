import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../features/books/booksSlice';
import '../style/Books.css';

function Books({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="book-card flex gap-5  border border-1 py-5 my-5">
      <div className=" first-part w-[50%] pl-3">
        <h2 className="book-category">{book.category}</h2>
        <h2 className="book-title">{book.title}</h2>
        <span className="book-text">{book.author}</span>
        <ul className="user-features flex w-[40%] mt-4">
          <li className="book-text me-3"><button type="button">Comments</button></li>
          <div className="feature-verticle-line " />
          <li className="book-text me-3">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeBookFromApi(book.item_id));
              }}
            >
              Remove
            </button>
          </li>
          <div className="feature-verticle-line" />
          <li className="book-text me-3"><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className=" w-[25%] second-part bg-sky-500">
        Second part
      </div>
      <div className=" w-[25%] third-part bg-red-500">
        Third part
      </div>
    </div>
  );
}

Books.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Books;
