import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';

const BooksContainer = () => {
  const bookList = useSelector((state) => state.books.value);
  return (
    <div className="book-container w-[65%] mx-auto my-10">
      {bookList.map((book) => (
        <Books key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BooksContainer;
