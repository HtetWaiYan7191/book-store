import React from 'react';
import {BiSolidUser} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className=' flex justify-between py-10 px-16 items-center align-middle shadow-md'>
      <ul className=' flex justify-around w-[40%]  items-center'>
        <h2 className=' text-4xl text-sky-500 font-semibold'>Book Store</h2>
        <li>BOOKS</li>
        <li>CATEGORIES</li>
      </ul>

      <div>
      <BiSolidUser className='text-2xl'/>
      </div>
    </nav>
  )
}

export default Navbar
