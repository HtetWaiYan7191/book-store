import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import { fetchBook } from '../redux/books/booksSlice';

const BooksContainer = () => {
  const bookList = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  return (
    <div className="book-container w-[100%] mx-auto  dark:bg-gray-700 py-16 px-72">
      {bookList?.map((book) => (
        <Books key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BooksContainer;
