import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import search from '../styles/SearchBar.module.css';

import * as SubscriptionActions from '../actions/subscription';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    const { text, makeRequest } = this.props;

    this.inputRef = React.createRef();

    this.state = {
      text,
    };

    this.makeRequest = makeRequest;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.makeRequest();
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.makeRequest(e);
      this.setState({
        text: '',
      });
    }
  }

  handleClick() {
    this.makeRequest({ target: { value: this.inputRef.current.value } });
    this.setState({
      text: '',
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSearch(e) {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  }

  render() {
    const iconClass = `fas fa-search  ${search.ico}`;
    const {
      state, inputRef, handleClick, handleChange, handleKeyDown, handleSearch,
    } = this;

    return (
      <>
        <input data-testid="search-input" id="search-bar" ref={inputRef} value={state.text} onKeyDown={e => handleKeyDown(e)} onChange={handleChange} tabIndex={0} className={search.nav__search} type="text" placeholder="Search..." required />
        <i
          data-testid="search-ico"
          onClick={handleClick}
          className={iconClass}
          role="button"
          tabIndex={-1}
          aria-label="Search"
          onKeyDown={e => handleSearch(e)}
        />
      </>
    );
  }
}

function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
}

function mapActionsToProps(dispatch) {
  return {
    // eslint-disable-next-line prefer-object-spread
    actions: bindActionCreators(Object.assign(
      {}, SubscriptionActions,
    ), dispatch),
  };
}

SearchBar.propTypes = {
  makeRequest: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(SearchBar));
