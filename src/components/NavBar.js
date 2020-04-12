import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  clickHandler = () => {
    this.props.history.goBack();
  };

  handleKeyDown = e => {
    if (e.keyCode === 9) {
      this.props.history.goBack();
    }
  };

  render() {
    return (
      <nav className="nav">
        { this.props.location.pathname !== '/' && <i role="button" tabIndex={1} aria-label="Back to last page" onClick={this.clickHandler} onKeyDown={e => this.handleKeyDown(e)} className="fas fa-chevron-left nav__back-ico" />}
        <SearchBar />
      </nav>
    );
  };
};

NavBar.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(NavBar);
