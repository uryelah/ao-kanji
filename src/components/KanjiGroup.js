import React from 'react';
import './KanjiGroup.css';
import {Link} from 'react-router-dom';

const KanjiGroup = ({ grade, actions }) => {
  const clickHandler = (grade) => {
    const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=${grade}`;
    const options =  {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
          "x-rapidapi-key": "c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f",
        }
    }

    actions.fetchSubscription(url, options);
  };

  return(
    <article onClick={() => clickHandler(grade)} className="card">
      <h2 className="card__title">
        <span className="card__title__top-left--round">
            {grade}
        </span>
        <span className="card__title__bottom-left">
          <Link to={`/grade/${grade}`}><span>Grade {grade}</span></Link>
          <span>Kanji</span>
        </span>
      </h2>
    </article>
  )
};

export default KanjiGroup;