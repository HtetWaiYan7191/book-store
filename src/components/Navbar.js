import React from 'react';
import { ImUser } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import PropTypes from 'prop-types';
import { CiDark } from 'react-icons/ci';
import '../style.css';

const Navbar = ({ handleDarkMode, isDarkMode }) => (
  <nav className=" flex justify-between py-10 px-16 items-center align-middle border border-b-2 dark:bg-gray-800">
    <ul className=" flex justify-around w-[40%]  items-center">
      <h2 className=" navbar-title">Bookstore CMS</h2>
      <li className="navbar-text"><NavLink to="/" className=" dark:text-white-500">BOOKS</NavLink></li>
      <li className="navbar-text"><NavLink to="/category">CATEGORIES</NavLink></li>
    </ul>

    <div className="flex align-middle">
      <div className="user-icon-container me-4"><ImUser className="text-2xl user-icon dark:text-sky-500" /></div>
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
