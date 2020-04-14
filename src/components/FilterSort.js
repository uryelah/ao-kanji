import React from 'react';
import kanjis from './styles/KanjiList.module.css';
import { defineFilter } from '../helpers';
import NothingFound from './NothingFound';

const FilterSort = ({
  state, clickHandler, filter, sorting, history, loadVisible
}) => {
  let elements = state.subscription;

  if (elements && sorting < 0) {
    elements = [...elements].reverse();
  }

  const filterCall = defineFilter(filter);

  const kanjiClass = `${kanjis.container__kanji} + out_of_view`;

  return (
    <>
      {state.subscription && state.subscription.length
      && elements.length > 0
        ? elements.filter(filterCall).map((kanji, i, arr) => {
          if (i === arr.length - 1) {
            loadVisible();
          }
          return(<article
            onClick={() => clickHandler(kanji.kanji.character, history, state)}
            className={kanjiClass}
            key={kanji.kanji.character}
          >
            <h2 className={kanjis.container__kanji__title}>{kanji.kanji.character}</h2>
            <p>
              <strong>radical:</strong>
              {kanji.radical.character}
            </p>
          </article>
        )})
        : <NothingFound />}
    </>
  );
};

export default FilterSort;
