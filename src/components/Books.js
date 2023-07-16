import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../features/books/booksSlice';
import '../style/Books.css';

function Books({ book }) {
  const dispatch = useDispatch();
  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 20);
  return (
    <div className="book-card flex gap-5  border border-1 py-5 my-5 items-center align-bottom dark:bg-gray-900">
      <div className=" first-part w-[40%] pl-5">
        <h2 className="book-category dark:text-sky-700">{book.category}</h2>
        <h2 className="book-title dark:text-gray-200">{book.title}</h2>
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
      <div className=" w-[25%] second-part flex align-middle items-center justify-around ">
        <CircularProgressbar
          className=" w-[4.25rem]"
          value={progress}
          styles={{
            trail: {
              stroke: '#d6d6d6',
              strokeLinecap: 'butt',
              transformOrigin: 'center center',
            },
            path: {
              stroke: '#0290ff',
              strokeLinecap: 'butt',
              transition: 'stroke-dashoffset 0.5s ease 0s',
              transformOrigin: 'center center',
            },
          }}
        />
        <div className="flex flex-col">
          <h2 className="progress-percent dark:text-sky-400">
            {progress}
            {' '}
            %
          </h2>
          <span className="progress-text dark:text-gray-300">Completed</span>
        </div>
      </div>
      <div className="verticle-line" />
      <div className=" w-[25%] third-part">
        <h2 className="current-chapter dark:text-gray-300">CURRENT CHAPTER</h2>
        <h2 className="chapter dark:text-sky-400">
          Chapter
          {chapter}
        </h2>
        <button type="button" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Books.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Books;
