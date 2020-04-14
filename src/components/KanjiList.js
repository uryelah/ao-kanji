import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import kanji from './styles/KanjiList.module.css';

import FilterSort from './FilterSort';
import FilterSortController from './FilterSortController';
import Loader from './Loader';

import * as SubscriptionActions from '../actions/subscription';

import {
  makeRequest, toggleSorting, updateFilter, clickHandler,
} from '../helpers/index.js';

const KanjiList = props => {
  const thisRef = useRef(null);

  useEffect(() => {
    if (props.match.params.grade_num) {
      makeRequest(props);
    }
  }, []);

  const handleScroll = (e) => {
    [...thisRef.current.children].map(child => {
      if (thisRef.current.clientHeight + thisRef.current.scrollTop < child.offsetTop) {
        child.classList.add('out_of_view');
      } else {
        child.classList.remove('out_of_view');
      }
    });
  };

  const {
    state, actions, history, state: propState,
  } = props;

  return (
    <section
      ref={thisRef}
      key={state.subscription}
      className={kanji.container}
      onScroll={handleScroll}
    >
      <FilterSortController
        loadVisible={handleScroll}
        filter={state.filter}
        sorting={state.sorting}
        filterCallback={actions.filterBy}
        updateFilter={updateFilter}
        toggleCallback={actions.toggleSort}
        toggleSorting={toggleSorting}
      />
      { state.loading
        ? <Loader />
        : (
          <FilterSort
            loadVisible={handleScroll}
            filter={props.state.filter}
            sorting={props.state.sorting}
            state={propState}
            history={history}
            clickHandler={clickHandler}
          />
        )}
    </section>
  );
};

function mapStateToProps(state) {
  return state;
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...SubscriptionActions }, dispatch),
  };
}

KanjiList.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(KanjiList));
