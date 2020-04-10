import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './App.css';
import MainComponent from './components/Main';

import * as SubscriptionActions from "./actions/subscription";

class App extends Component {

  render() {
    const { actions, state } = this.props;
    return (<MainComponent actions={actions} state={state} />);
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

export default connect(mapStateToProps, mapActionsToProps)(App);