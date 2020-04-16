import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/FilterSortController.css';
import { isOn, handleFilter as handleClick } from '../helpers';

const FilterSortController = ({
  sorting, updateFilter, filterCallback, toggleSorting, toggleCallback, loadVisible,
}) => {
  const myInput = useRef(null);

  const handleShow = (callback, params) => {
    callback(...params);
    setTimeout(() => {
      loadVisible();
    }, 300);
  };

  const handleKeyDown = (e, code, sort) => {
    if (e.keyCode === code) {
      handleShow(toggleSorting, [e, sort, toggleCallback]);
    }
  };

  return (
    <header className="filter-sort-bar">
      <div>
        <i
          className={isOn(-1, sorting)}
          onClick={e => handleShow(toggleSorting, [e, -1, toggleCallback])}
          role="button"
          tabIndex={-1}
          aria-label="Sort down"
          onKeyDown={e => handleKeyDown(e, 40, -1)}
        />
        <i
          className={isOn(1, sorting)}
          onClick={e => handleShow(toggleSorting, [e, 1, toggleCallback])}
          role="button"
          tabIndex={-1}
          aria-label="Sort up"
          onKeyDown={e => handleKeyDown(e, 38, 1)}
        />
      </div>
      <div>
        <form className="filter-sort-bar__form" onSubmit={e => handleShow(handleClick, [e, myInput.current, updateFilter, filterCallback])}>
          <input ref={myInput} type="number" placeholder="stroke number" min="1" max="84" />
          <button type="submit">
            <i className="fas fa-filter" />
          </button>
        </form>
      </div>
    </header>
  );
};

FilterSortController.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filterCallback: PropTypes.func.isRequired,
  toggleSorting: PropTypes.func.isRequired,
  toggleCallback: PropTypes.func.isRequired,
  loadVisible: PropTypes.func.isRequired,
  sorting: PropTypes.number.isRequired,
};

export default FilterSortController;
