import React, { useRef } from 'react';
import './styles/FilterSortController.css';

const FilterSortController = ({sorting, updateFilter, toggleSorting}) => {
  const isOn = n => {
    const type = n < 0 ? 'down' : 'up-alt';

    if (sorting === n) {
      return `fas fa-sort-amount-${type} fas-on`;
    };

    return `fas fa-sort-amount-${type} fas-off`;
  }

  const myInput = useRef(null);

  const handleClick = (e) => {
    const strokes = parseInt(myInput.current.value, 10);

    updateFilter(strokes);

    e.preventDefault();
  }

  return (
    <header className="filter-sort-bar">
      <div>
        <i className={isOn(-1)} onClick={(e) => toggleSorting(e, -1)}></i>
        <i className={isOn(1)} onClick={(e) => toggleSorting(e, 1)}></i>
      </div>
      <div>
        <form className="filter-sort-bar__form" onSubmit={handleClick}>
          <input ref={myInput} type="number" placeholder="stroke number" min="1" max="84"/>
          <button type="submit">
            <i className="fas fa-filter"></i>
          </button>
        </form>
      </div>
    </header>
  )
}

export default FilterSortController;