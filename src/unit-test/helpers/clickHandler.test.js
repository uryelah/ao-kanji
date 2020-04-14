/* eslint-disable */
import { clickHandler } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof clickHandler).toBe('function');
});

it('is has 3 parameters', () => {
  expect(clickHandler.length).toBe(3);
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

it('calls a the second parameter with the first parameter as an argument (I)', () => {
  clickHandler('yolo', history, 'state1');

  const result = history.arr[history.arr.length - 1][0] + history.arr[history.arr.length - 1][1];

  expect(result).toBe('/kanjis/yolostate1');
});

it('calls a the second parameter with the first parameter as an argument (II)', () => {
  clickHandler('lmao', history, 'state2');

  const result = history.arr[history.arr.length - 1][0] + history.arr[history.arr.length - 1][1];

  expect(result).toBe('/kanjis/lmaostate2');
});
