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
      text: '',
      redirect: null,
    };
  }

  makeRequest(e) {
    const path = `/search/${e ? e.target.value : this.props.location.pathname.split('/').reverse()[0]}`;

    const text = e ? e.target.value : this.props.location.pathname.split('/').reverse()[0];

    this.setState({
      redirect: path,
      text: text,
    });

  let url = `https://kanjialive-api.p.rapidapi.com/api/public/search/${text}`;
  console.log(path, this.state.text, this.props.location.pathname.split('/').reverse()[0])

  const options =  {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
      "x-rapidapi-key": "c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f",
    }
  }
  this.props.actions.fetchSubscription(url, options);

    setTimeout(() => {
      this.setState({
        redirect: null,
        text: '',
      });
      this.props.history.push(path, this.props.state);
    }, 500);
  }

  componentDidMount() {
    this.makeRequest();
  }

  componentDidUpdate() {
    if (this.props.state.subscription === null) {
      //this.makeRequest();
    }
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.makeRequest(e);
    }
  }

  handleChange = (e) => {
    console.log(e, this.state.text)
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
