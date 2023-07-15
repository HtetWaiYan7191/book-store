import React from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import '../style.css';

const Navbar = () => (
  <nav className=" flex justify-between py-10 px-16 items-center align-middle shadow-md">
    <ul className=" flex justify-around w-[40%]  items-center">
      <h2 className=" text-[1.785rem] text-sky-500 font-semibold">Book Store</h2>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/category">Categories</NavLink></li>
    </ul>

    <div>
      <BiSolidUser className="text-2xl" />
    </div>
  </nav>
);

export default Navbar;
