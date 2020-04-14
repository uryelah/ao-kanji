import { handleFilter } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof handleFilter).toBe('function');
});

it('is has 4 parameters', () => {
  expect(handleFilter.length).toBe(4);
});

let mockDefault = true;

const event = {
  preventDefault: () => {
    mockDefault = false;
  },
};

const input = {
  value: '2',
};

let handleFilterColateral = 7;

const filterCallback = n => n * 2;

const updateFilter = (n, callback) => {
  handleFilterColateral = callback(n);
};

it('calls its first parameter preventDefault property', () => {
  handleFilter(event, input, updateFilter, filterCallback);
  expect(mockDefault).toBe(false);
});

it('calls its third parameter with the second one turned into integer and the fourth one as callback', () => {
  handleFilter(event, input, updateFilter, filterCallback);

  expect(handleFilterColateral).toBe(4);
});
