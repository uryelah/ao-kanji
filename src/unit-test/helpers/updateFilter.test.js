/* eslint-disable */
import { updateFilter } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof updateFilter).toBe('function');
});

it('is has 3 parameters', () => {
  expect(updateFilter.length).toBe(2);
});

let updateFilterColateral = null;

const filterBy = n => {
  updateFilterColateral = n;
};

it('calls a the second parameter with the first parameter as an argument (I)', () => {
  updateFilter(2, filterBy);

  expect(updateFilterColateral).toBe(2);
});

it('calls a the second parameter with the first parameter as an argument (II)', () => {
  updateFilter(10, filterBy);

  expect(updateFilterColateral).toBe(10);
});
