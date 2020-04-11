import React from 'react';
import './KanjiGroup.css';

const KanjiGroup = ({ grade }) => {
  return(
    <article className="card">
      <h2 className="card__title">
        <span className="card__title__top-left--round">
            {grade}
        </span>
        <span className="card__title__bottom-left">
          <span>Grade {grade}</span>
          <span>Kanji</span>
        </span>
      </h2>
    </article>
  )
};

export default KanjiGroup;