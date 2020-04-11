import React, { Component, Fragment } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return(
      <Fragment>
        <input className="nav__search" type="text" placeholder="Search by: kanji, word, kana..." required>
        </input>
        <i className="fas fa-search nav__search-ico"></i>
      </Fragment>
    )
  }
}

export default SearchBar;