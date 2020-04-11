import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './App.css';
import MainComponent from './components/Main';
import NavBar from './components/NavBar';

import * as SubscriptionActions from "./actions/subscription";

class App extends Component {

  render() {
    const { actions, state } = this.props;
    return (
      <main className='App'>
        <NavBar/>
        <MainComponent actions={actions} state={state} />
      </main>
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

export default connect(mapStateToProps, mapActionsToProps)(App);