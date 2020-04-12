/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import MainComponent from './components/Main';
import NavBar from './components/NavBar';
import KanjiList from './components/KanjiList';
import KanjiDetail from './components/KanjiDetail';

import * as SubscriptionActions from './actions/subscription';

class App extends Component {
  render() {
    const { actions, state } = this.props;
    return (
      <main className="App">
        <NavBar />
        <Switch>
          <Route path="/" render={() => <MainComponent {...{ actions, state }} />} exact />
          <Route path="/(grade|chapter)/:grade_num" component={KanjiList} exact />
          <Route path="/search/:word" component={KanjiList} exact />
          <Route path="/kanjis/:kanji" component={KanjiDetail} exact />
        </Switch>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...SubscriptionActions }, dispatch),
  };
}

App.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
