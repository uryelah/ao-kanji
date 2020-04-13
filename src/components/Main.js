import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import KanjiGroup from './KanjiGroup';
import './styles/Main.css';
import { pageTitle, handleSelect } from '../helpers';

const MainComponent = props => {
  const { actions, state } = props;
  const { groupBy } = state;

  return (
    <Fragment>
      <header className={pageTitle[groupBy.length][1]}>
        <h1>{pageTitle[groupBy.length][0]}</h1>
        <label className="App__header__label" htmlFor="select-group">Group kanji by:</label>
        <select id="select-group" className="App__header__select" onChange={e => handleSelect(e, actions)}>
          <option selected={groupBy.length === 6} name="grade">Grade</option>
          <option selected={groupBy.length === 11} name="macquarie">Macquarie</option>
          <option selected={groupBy.length === 20} name="ap">AP exam</option>
        </select>
      </header>

      <div className="group group--r-2">
        {
          props.state.groupBy.map((n, i) => {
            const dark = (i + 1) % 4 <= 1 ? 'card--light' : '';
            return <KanjiGroup group={pageTitle[props.state.groupBy.length][2]} classType={dark} actions={props.actions} grade={n} />;
          })
        }
      </div>
    </Fragment>
  );
};

MainComponent.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MainComponent;
