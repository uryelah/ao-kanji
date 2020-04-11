import React from 'react';
import './NavBar.css';
import SearchBar from './SearchBar';

const NavBar = () => {
  return(
    <nav className="nav">
      <i className="fas fa-chevron-left nav__back-ico"></i>
      <SearchBar/>
    </nav>
  )
};

export default NavBar;