import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';

const BooksContainer = () => {
  const bookList = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  const fetchApi = async () => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
      const api = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/', settings);
      const data = await api.text();
      console.log(data)
  }
  
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="book-container w-[65%] mx-auto my-10">
      {bookList.map((book) => (
        <Books key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BooksContainer;
