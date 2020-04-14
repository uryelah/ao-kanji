/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './styles/KanjiGroup.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleClick, fetchKanjiGroup } from '../helpers';

const KanjiGroup = props => {
  const {
    grade, actions, history, state, group, classType,
  } = props;

  const handleKeyDown = (e, callback, params) => {
    if (e.keyCode === 13) {
      callback(...params);
    }
  };

  const className = `card ${classType}`;

  return (
    <article
      onKeyDown={e => handleKeyDown(e, fetchKanjiGroup, [actions, grade, group])}
      onClick={() => fetchKanjiGroup(actions, grade, group)}
      className={className}
    >
      <h2 className="card__title">
        <span className="card__title__top-left--round">
          {grade}
        </span>
        <span className="card__title__top-left">
          <i
            className="far fa-arrow-alt-circle-right"
            onClick={() => handleClick(grade, group, history, state)}
            role="button"
            tabIndex={-1}
            aria-label="Sort down"
            onKeyDown={e => handleKeyDown(e, handleClick, [grade, group, history, state])}
          />
        </span>
        <span className="card__title__bottom-left">
          <button className="card__btn" type="button" onClick={() => handleClick(grade, group, history, state)}>
            <span>
              { group.includes('list') ? 'Chapter ' : 'Grade ' }
              {grade}
            </span>
          </button>
          <span>Kanji</span>
        </span>
      </h2>
    </article>
  );
};

function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
}

KanjiGroup.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  group: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(withRouter(KanjiGroup));
