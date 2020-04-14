/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import KanjiGroup from './KanjiGroup';
import './styles/Main.css';
import { pageTitle, handleSelect } from '../helpers';

const MainComponent = props => {
  const { actions, state } = props;
  const { groupBy } = state;

  return (
    <>
      <header className={pageTitle[groupBy.length][1]}>
        <h1>{pageTitle[groupBy.length][0]}</h1>
        <label className="App__header__label" htmlFor="select-group">Group kanji by:</label>
        <select id="select-group" className="App__header__select" onChange={e => handleSelect(e, actions)}>
          <option defaultValue={groupBy.length === 6} name="grade">Grade</option>
          <option defaultValue={groupBy.length === 11} name="macquarie">Macquarie</option>
          <option defaultValue={groupBy.length === 20} name="ap">AP exam</option>
        </select>
      </header>

      <div className="group group--r-2">
        {
          state.groupBy.map((n, i) => {
            const dark = (i + 1) % 4 <= 1 ? 'card--light' : '';
            return (
              <KanjiGroup
                key={n}
                group={pageTitle[props.state.groupBy.length][2]}
                classType={dark}
                actions={props.actions}
                grade={n}
              />
            );
          })
        }
      </div>
    </>
  );
};

MainComponent.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MainComponent;
