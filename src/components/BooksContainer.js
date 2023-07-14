import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import { fetchBook } from '../features/books/booksSlice';

const BooksContainer = () => {
  const bookList = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  // const fetchBooks = async () => {
  //   const api = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/', { method: 'POST' });
  //   const result = await api.text();
  //   console.log(result);
  // };
  // useEffect(() => {
  //   fetchBooks();
  // }, []);

  return (
    <div className="book-container w-[65%] mx-auto my-10">
      {bookList?.map((book) => (
        <Books key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BooksContainer;
