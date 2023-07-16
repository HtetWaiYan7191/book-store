import React from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import PropTypes from 'prop-types';
import { CiDark } from 'react-icons/ci';
import '../style.css';

const Navbar = ({ handleDarkMode, isDarkMode }) => (
  <nav className=" flex justify-between py-10 px-16 items-center align-middle shadow-md dark:bg-gray-800">
    <ul className=" flex justify-around w-[40%]  items-center">
      <h2 className="  text-sky-500 font-semibold navbar-title">Book Store</h2>
      <li className="navbar-text"><NavLink to="/" className="text-sky-500 dark:text-white-500">Home</NavLink></li>
      <li className="navbar-text"><NavLink to="/category" className={isDarkMode ? 'text-white' : 'text-dark-500'}>Categories</NavLink></li>
    </ul>

    <div className="flex align-middle">
      <BiSolidUser className="text-2xl dark:text-sky-500 me-4" />
      {isDarkMode ? (
        <button type="button" onClick={handleDarkMode}>
          <MdDarkMode className="text-2xl text-white" />
        </button>
      ) : (
        <button type="button" onClick={handleDarkMode}>
          <CiDark className="text-2xl " />
        </button>
      )}
    </div>
  </nav>
);
Navbar.defaultProps = {
  handleDarkMode: () => {},
};

Navbar.propTypes = {
  handleDarkMode: PropTypes.func,
  isDarkMode: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Navbar;
