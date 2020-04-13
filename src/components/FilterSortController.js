import React, { useRef } from 'react';
import './styles/FilterSortController.css';
import { isOn, handleFilter as handleClick } from '../helpers';

const FilterSortController = ({
  sorting, updateFilter, filterCallback, toggleSorting, toggleCallback,
}) => {
  const myInput = useRef(null);

  return (
    <header className="filter-sort-bar">
      <div>
        <i className={isOn(-1, sorting)} onClick={e => toggleSorting(e, -1, toggleCallback)} />
        <i className={isOn(1, sorting)} onClick={e => toggleSorting(e, 1, toggleCallback)} />
      </div>
      <div>
        <form className="filter-sort-bar__form" onSubmit={e => handleClick(e, myInput.current, updateFilter, filterCallback)}>
          <input ref={myInput} type="number" placeholder="stroke number" min="1" max="84" />
          <button type="submit">
            <i className="fas fa-filter" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default FilterSortController;
