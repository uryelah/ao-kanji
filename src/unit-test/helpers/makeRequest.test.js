/* eslint-disable */
import { makeRequest } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof makeRequest).toBe('function');
});

it('is has 1 parameters', () => {
  expect(makeRequest.length).toBe(1);
});
