import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Redirect } from 'react-router-dom';
import './SearchBar.css';

import * as SubscriptionActions from "../actions/subscription";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
    };
    this.makeRequest = this.props.makeRequest;
  }

  componentDidMount() {
    this.makeRequest();
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.makeRequest(e);
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.text} onKeyDown={e => this.handleKeyDown(e)} onChange={this.handleChange} tabIndex={0} className="nav__search" type="text" placeholder="Search by: kanji, word, kana..." required />
        <i className="fas fa-search nav__search-ico" />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign(
      {}, SubscriptionActions), dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(SearchBar));
