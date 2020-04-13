import React from 'react';
import mu from './styles/NothingFound.module.css';

const NothingFound = () => {
  return (
    <div className={mu.container}>
      <img className={mu.image} src='https://upload.wikimedia.org/wikipedia/commons/f/fb/Wu_%28negative%29.svg' alt='mu kanji, meaning "nothing"' />
      <p className={mu.title}>
        <bold>無 </bold>
        <em>(mu) </em>
        means 'nothing'
      </p>
      <p className={mu.subtitle}>
        That's what was found...
      </p>
    </div>
  )
};

export default NothingFound;