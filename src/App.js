/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './App.module.css';
import MainComponent from './components/Main';
import NavBar from './containers/NavBar';
import KanjiList from './containers/KanjiList';
import KanjiDetail from './containers/KanjiDetail';

import * as SubscriptionActions from './actions/subscription';

const App = props => {
  const { actions, state } = props;
  return (
    <main className={style.App}>
      <NavBar />
      <Switch>
        <Route path="/ao-kanji/" render={() => <MainComponent {...{ actions, state }} />} exact />
        <Route path="/(grade|chapter|ap-chapter)/:grade_num" component={KanjiList} exact />
        <Route path="/search/:word" component={KanjiList} exact />
        <Route path="/kanjis/:kanji" component={KanjiDetail} exact />
      </Switch>
    </main>
  );
};

function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
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
