import React from 'react';
import './KanjiGroup.css';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const KanjiGroup = (props) => {
  const { grade, actions, history, state, group } = props;
  const clickHandler = grade => {
    const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?${group}${grade}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
        'x-rapidapi-key': 'c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f',
      },
    };

    actions.fetchSubscription(url, options);
  };

  const handleClick = () => {
    const path = group.includes('grade') ? 'grade' : 'chapter';
    history.push(`/${path}/${grade}`, state);
  };

  return (
    <article onClick={() => clickHandler(grade)} className="card">
      <h2 className="card__title">
        <span className="card__title__top-left--round">
          {grade}
        </span>
        <span className="card__title__bottom-left">
          <button type="button" onClick={handleClick}>
            <span>
              Grade
              {grade}
            </span>
          </button>
          <span>Kanji</span>
        </span>
      </h2>
    </article>
  );
};

function mapStateToProps(state) {
  return state;
}

KanjiGroup.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  grade: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(withRouter(KanjiGroup));
