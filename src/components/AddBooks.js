// eslint-disable-react/prop-types
import React from 'react';
import PropTypes from 'prop-types';

const AddBooks = ({
  handleChange, handleSubmit, input, author, handleAuthor, warmMessage,
}) => (
  <form className="  w-[70%] mx-auto bg-sky-500 py-10">
    <h2 className="text-2xl my-3 ps-3">Add New Book</h2>
    <div className=" flex justify-around">
      <input
        type="text"
        placeholder="Book title"
        className="w-[60%] focus:outline-sky-500 ps-4"
        value={input}
        onChange={handleChange}
      />
      <select id={author} name={author} value={author} className="w-[20%]" onChange={handleAuthor}>
        <option value="htet">htet</option>
        <option value="may">may</option>
        <option value="yan">yan</option>
      </select>
      <button
        onClick={handleSubmit}
        type="button"
        className=" w-[10%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add book
      </button>
    </div>
    <span className="submit-warming">{warmMessage}</span>
  </form>
);

AddBooks.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleAuthor: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  warmMessage: PropTypes.string.isRequired,
};

export default AddBooks;
