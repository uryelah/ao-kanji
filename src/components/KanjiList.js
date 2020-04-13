import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import kanji from './styles/KanjiList.module.css';

import FilterSort from './FilterSort';
import FilterSortController from './FilterSortController';

import * as SubscriptionActions from "../actions/subscription";

const KanjiList = (props) => {
  const group = () => {
    if (props.state.groupBy.length === 6) {
      return 'grade=';
    } else if (props.state.groupBy.length === 11) {
      return 'list=mac:c';
    } else {
      return 'list=ap:c';
    }
  }

  const makeRequest = () => {
    let url;
    if (props.match.params.grade_num) {
      url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?${group()}${props.match.params.grade_num}`;
    } else if (props.match.params.word) {
      url = `https://kanjialive-api.p.rapidapi.com/api/public/search/${props.match.params.word}`;
    }

    const options = {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
        "x-rapidapi-key": "c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f",
      }
    }

    props.actions.fetchSubscription(url, options);
  }

  useEffect(() => {
    if (props.match.params.grade_num) {
      makeRequest();
    }
  }, []);

  const clickHandler = (kanji) => {
    props.history.push(`/kanjis/${kanji}`, props.state);
  }

  const updateFilter = (number) => {
    props.actions.filterBy(number);
  }

  const toggleSorting = (e, order) => {
    e.stopPropagation();

    props.actions.toggleSort(order);
  }

  const { state } = props;
  return (
    <section key={state.subscription} className={kanji.container}>
      <FilterSortController filter={props.state.filter} sorting={props.state.sorting} updateFilter={updateFilter} toggleSorting={toggleSorting} />
      <FilterSort filter={props.state.filter} sorting={props.state.sorting} state={state} clickHandler={clickHandler} />
    </section>
  )
};

function mapStateToProps(state) {
  return state;
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign(
      {}, SubscriptionActions), dispatch),
  };
}

KanjiList.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(KanjiList));