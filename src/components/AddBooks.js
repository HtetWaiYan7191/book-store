// eslint-disable-react/prop-types
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBookToApi } from '../features/books/booksSlice';

function AddBooks() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const initialState = {
    title: '', category: '', author: '', item_id: '',
  };
  const [newBook, setNewBook] = useState(initialState);

  return (
    <form className="w-[70%] mx-auto bg-sky-500 py-10">
      <h2 className="text-2xl my-3 ps-3">Add New Book</h2>
      <div className="flex justify-around">
        <input
          type="text"
          placeholder="Book title"
          className="w-[60%] focus:outline-sky-500 ps-4"
          value={newBook.title}
          onChange={(e) => {
            setNewBook({ ...newBook, title: e.target.value });
          }}
        />
        <select
          name={newBook.category}
          value={newBook.category}
          className="w-[20%]"
          onChange={(e) => {
            setNewBook((prev) => ({ ...prev, category: e.target.value }));
          }}
        >
          <option value="" defaultValue="Categirues">Categories</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Biography">Biography</option>
        </select>
        <select
          name={newBook.author}
          value={newBook.author}
          className="w-[20%]"
          onChange={(e) => {
            setNewBook((prev) => ({ ...prev, author: e.target.value }));
          }}
        >
          <option value="Authors">Authors</option>
          <option value="htet">htet</option>
          <option value="may">may</option>
          <option value="yan">yan</option>
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
          className="w-[10%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add book
        </button>
      </div>
      <span className="submit-warming">warming message</span>
    </form>
  );
}
export default AddBooks;
