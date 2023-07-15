// eslint-disable-react/prop-types
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBookToApi } from '../features/books/booksSlice';
import '../style/AddBooks.css';

function AddBooks() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const initialState = {
    title: '', category: '', author: '', item_id: '',
  };
  const [newBook, setNewBook] = useState(initialState);

  return (
    <>
      <h2 className="text-2xl my-3 ps-3 addbook-title">Add New Book</h2>
      <form className="w-[70%] mx-auto py-3">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Book title"
            className="w-[50%] focus:outline-sky-500 ps-4 border border-gray rounded-sm add-book-input"
            value={newBook.title}
            onChange={(e) => {
              setNewBook({ ...newBook, title: e.target.value });
            }}
          />
          <select
            name={newBook.category}
            value={newBook.category}
            className="w-[15%] ps-2  border border-gray rounded-sm focus:border-none focus:outline-sky-500 add-book-input focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
            onChange={(e) => {
              setNewBook((prev) => ({ ...prev, category: e.target.value }));
            }}
          >
            <option value="" defaultValue="Categirues">Categories</option>
            <option value="Action">Action</option>
            <option value="Fiction">Fiction</option>
            <option value="Biography">Biography</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery/Thriller">Mystery/Thriller</option>
          </select>
          <select
            name={newBook.author}
            value={newBook.author}
            className="w-[15%] ps-2  border border-gray rounded-sm focus:border-none focus:outline-sky-500 add-book-input focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
            onChange={(e) => {
              setNewBook((prev) => ({ ...prev, author: e.target.value }));
            }}
          >
            <option value="Authors">Authors</option>
            <option value="J.K.Rowling">J.K.Rowling</option>
            <option value="Stephen King">Stephen King</option>
            <option value="Margaret Atwood">Margaret Atwood</option>
            <option value="Mark Twai">Mark Twai</option>
            <option value="Charles Dickens">Charles Dickens</option>
          </select>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (newBook.title !== '' && newBook.author !== '' && newBook.category !== '') {
                dispatch(addNewBookToApi({ ...newBook, item_id: uuidv4() }));
                if (loading) setNewBook(initialState);
              }
            }}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add book
          </button>
        </div>
        {/* <span className="submit-warming">warming message</span> */}
      </form>
    </>

  );
}
export default AddBooks;
