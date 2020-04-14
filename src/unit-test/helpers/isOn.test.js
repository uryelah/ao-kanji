/* eslint-disable */
import { isOn } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof isOn).toBe('function');
});

it('is has 2 parameters', () => {
  expect(isOn.length).toBe(2);
});

it('returns a string containing "down" if its first parameter is less than 0', () => {
  expect(isOn(-1, 1).match('down')).toBeTruthy;
});

it('returns a string containing "up" if its first parameter is more than 0', () => {
  expect(isOn(1, 1).match('up')).toBeTruthy;
});

it('returns a string containing "on" if its two parameters are equal', () => {
  expect(isOn(-1, -1).match('on')).toBeTruthy;
});

it('returns a string containing "off" if its two parameters are not equal', () => {
  expect(isOn(1, -1).match('off')).toBeTruthy;
});
