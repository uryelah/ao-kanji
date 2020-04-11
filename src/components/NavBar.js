import React from 'react';
import {withRouter} from 'react-router-dom';
import './NavBar.css';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  console.log('!!!!!!', props)

  const clickHandler = () => {
    props.history.goBack();
  }

  return(
    <nav className="nav">
      { props.location.pathname !== '/' && <i onClick={clickHandler} className="fas fa-chevron-left nav__back-ico"></i>}
      <SearchBar/>
    </nav>
  )
};

export default withRouter(NavBar);