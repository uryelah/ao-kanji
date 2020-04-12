import React, { Fragment } from 'react';

const FilterSort = ({state, clickHandler, filter, sorting}) => {
  console.log(sorting);
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
        <article onClick={() => clickHandler(kanji.kanji.character)} className="kanjis-container__kanji" key={kanji.kanji.character}>
          <h2>{kanji.kanji.character}</h2>
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