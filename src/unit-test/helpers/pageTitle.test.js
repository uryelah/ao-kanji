import { pageTitle } from '../../helpers/index.js';

it('is an object', () => {
  expect(typeof pageTitle).toBe('object');
});

it('has three elements', () => {
  expect(Object.keys(pageTitle).length).toBe(3);
});

it('has three array elements', () => {
  expect(Object.values(pageTitle)[0].push).toBeTruthy;
});