import '@testing-library/jest-dom';

import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../../containers/SearchBar';
import store from '../mocks/store';
import { initialState } from '../mocks/reducers';

initialState.subscription = [{ kanji: { character: '手', stroke: 7 }, radical: { character: '⺅' } }, { kanji: { character: '何', stroke: 7 }, radical: { character: '⺅' } }];

test('it renders an image and two lines of text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchBar
          text=""
          makeRequest={() => true}
        />
      </BrowserRouter>
    </Provider>,
  );

  const input = screen.getByTestId('search-input');
  const icon = screen.getByTestId('search-ico');

  expect(input).toBeTruthy();
  expect(icon).toBeTruthy();

  cleanup();
});
