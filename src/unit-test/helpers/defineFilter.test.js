/* eslint-disable */
import { defineFilter } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof defineFilter).toBe('function');
});

it('is has 1 parameters', () => {
  expect(defineFilter.length).toBe(1);
});

it('returns a function', () => {
  expect(typeof defineFilter(2)).toBe('function');
});
