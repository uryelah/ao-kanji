/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import kanjis from './styles/KanjiList.module.css';
import { defineFilter } from '../helpers';
import NothingFound from './NothingFound';

const FilterSort = ({
  state, clickHandler, filter, sorting, history, loadVisible,
}) => {
  useEffect(() => {
    loadVisible();
  }, [state, loadVisible]);

  let elements = state.subscription;

  if (elements && elements.length && sorting < 0) {
    elements = [...elements].reverse();
  }

  const filterCall = defineFilter(filter);

  const kanjiClass = `${kanjis.container__kanji} + out_of_view`;

  const handleKeyDown = (e, kanji) => {
    if (e.keyCode === 13) {
      clickHandler(kanji.kanji.character, history, state);
    }
  };

  return (
    <>
      {state.subscription && state.subscription.length
      && elements.length > 0
        ? elements.filter(filterCall).map((kanji, i, arr) => {
          if (i === arr.length - 1) {
            loadVisible();
          }
          return (
            <article
              onClick={() => clickHandler(kanji.kanji.character, history, state)}
              onKeyDown={e => handleKeyDown(e, kanji)}
              className={kanjiClass}
              key={kanji.kanji.character}
            >
              <h2 className={kanjis.container__kanji__title}>{kanji.kanji.character}</h2>
              <p>
                <strong>radical:</strong>
                {kanji.radical.character}
              </p>
            </article>
          );
        })
        : <NothingFound />}
    </>
  );
};

FilterSort.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
  loadVisible: PropTypes.func.isRequired,
  filter: PropTypes.number.isRequired,
  sorting: PropTypes.number.isRequired,
};

export default FilterSort;
