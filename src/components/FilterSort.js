import React, { Fragment } from 'react';
import kanjis from './styles/KanjiList.module.css';

const FilterSort = ({state, clickHandler, filter, sorting}) => {
  let elements = state.subscription;

  if (elements && sorting < 0) {
    elements = [...elements].reverse();
  };

  let filterCall = (element) => {
    return element;
  };

  if (filter) {
    filterCall = (element) => {
      return element.kanji.stroke === filter;
    }
  }

  return (
    <Fragment>
    {state.subscription && state.subscription.length && elements.filter(filterCall).map(kanji => {
      return(
        <article onClick={() => clickHandler(kanji.kanji.character)} className={kanjis.container__kanji} key={kanji.kanji.character}>
          <h2 className={kanjis.container__kanji__title}>{kanji.kanji.character}</h2>
          <p>
            <strong>radical:</strong>
            {kanji.radical.character}
          </p>
        </article>
      );
    })}
    </Fragment>
  )
}

export default FilterSort;