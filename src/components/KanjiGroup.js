import React from 'react';
import './styles/KanjiGroup.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleClick, fetchKanjiGroup } from '../helpers';

const KanjiGroup = props => {
  const {
    grade, actions, history, state, group, classType,
  } = props;

  const className = `card ${classType}`;

  return (
    <article onClick={() => fetchKanjiGroup(actions, grade, group)} className={className}>
      <h2 className="card__title">
        <span className="card__title__top-left--round">
          {grade}
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

function mapStateToProps(state) {
  return state;
}

KanjiGroup.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  grade: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(withRouter(KanjiGroup));
