import React from 'react';
import loader from './styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={loader.spinner}></div>
  )
};

export default Loader;