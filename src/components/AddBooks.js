import React from 'react';

const AddBooks = () => (
  <div className='  w-[70%] mx-auto bg-sky-500 py-10'>
    <h2 className="text-2xl my-3 ps-3">Add New Book</h2>
    <form className=" flex justify-around">
      <input type="text" placeholder="Book title" className='w-[60%] focus:outline-sky-500 ps-4' />
      <select id="category" name="category" className='w-[20%]'>
        <option value="category">Category</option>
      </select>
      <button type="button" className=' w-[10%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add book</button>
    </form>
  </div>
);

export default AddBooks;
