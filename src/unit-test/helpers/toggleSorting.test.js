import { toggleSorting } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof toggleSorting).toBe('function');
});

it('is has 3 parameters', () => {
  expect(toggleSorting.length).toBe(3);
});


let propagation = true;
let toggleSortingColateral = null;

const event = {
  target: {
    value: '',
  },
  stopPropagation: () => {
    propagation = false;
  },
};

const toggleSort = n => {
  toggleSortingColateral = n;
};

it('calls a stopPropagation property from the first parameter', () => {
  toggleSorting(event, 1, toggleSort);

  expect(propagation).toBe(false);
});

it('calls a the third parameter with the second parameter as an argument', () => {
  toggleSorting(event, -1, toggleSort);

  expect(toggleSortingColateral).toBe(-1);
});
