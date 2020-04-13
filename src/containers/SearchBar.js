import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import search from './styles/SearchBar.module.css';

import * as SubscriptionActions from "../actions/subscription";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

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

  handleClick = () => {
    this.makeRequest({target: { value: this.inputRef.current.value }});
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    const iconClass = `fas fa-search  ${search.ico}`
    return (
      <Fragment>
        <input ref={this.inputRef} value={this.state.text} onKeyDown={e => this.handleKeyDown(e)} onChange={this.handleChange} tabIndex={0} className={search.nav__search} type="text" placeholder="Search by: kanji, word, kana..." required />
        <i onClick={this.handleClick} className={iconClass} />
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
