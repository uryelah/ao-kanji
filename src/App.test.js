/* eslint-disable */
import React from 'react';
import { createStore } from 'redux';
import { render, fireEvent, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
/*
test('can render with redux with custom store', () => {
  const store = createStore(() => ({ count: 1000 }));
  render(<App />, {
    store,
  });
  // fireEvent.click(screen.getByText('+'))
  // expect(screen.getByTestId('count-value')).toHaveTextContent('1000')
  // fireEvent.click(screen.getByText('-'))
  // expect(screen.getByTestId('count-value')).toHaveTextContent('1000')
});
*/