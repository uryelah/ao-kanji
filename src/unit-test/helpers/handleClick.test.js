/* eslint-disable */
import { handleClick } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof handleClick).toBe('function');
});

it('is has 4 parameters', () => {
  expect(handleClick.length).toBe(4);
});

const history = (() => {
  const arr = [];

  return ({
    push: (str, obj) => {
      arr.push([str, obj]);
    },
    arr,
  });
})();

it('pushes different values in the history array depending on the first and second parameters (I)', () => {
  handleClick(1, 'grade', history, 'state1');

  const result = history.arr[history.arr.length - 1][0] + history.arr[history.arr.length - 1][1];

  expect(result).toBe('/grade/1state1');
});

it('pushes different values in the history array depending on the first and second parameters (I)', () => {
  handleClick(10, 'mac', history, 'state2');

  const result = history.arr[history.arr.length - 1][0] + history.arr[history.arr.length - 1][1];

  expect(result).toBe('/chapter/10state2');
});

it('pushes different values in the history array depending on the first and second parameters (I)', () => {
  handleClick(10, 'ap', history, 'state3');

  const result = history.arr[history.arr.length - 1][0] + history.arr[history.arr.length - 1][1];

  expect(result).toBe('/ap-chapter/10state3');
});
