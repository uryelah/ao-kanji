import '@testing-library/jest-dom';

import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../containers/NavBar';
import store from '../mocks/store';
import { initialState } from '../mocks/reducers';

initialState.subscription = [{ kanji: { character: '手', stroke: 7 }, radical: { character: '⺅' } }, { kanji: { character: '何', stroke: 7 }, radical: { character: '⺅' } }];

test('it renders an image and two lines of text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar
          history={{ length: 2 }}
          actions={{ mockAction: () => null }}
          state={initialState}
        />
      </BrowserRouter>
    </Provider>,
  );

  const nav = screen.getByTestId('navbar');

  expect(nav).toBeTruthy();
  expect(nav.childElementCount).toBe(4);
  expect(nav.getElementsByTagName('a').length).toBe(1);
  expect(nav.getElementsByTagName('i').length).toBe(2);
  expect(nav.getElementsByTagName('input').length).toBe(1);

  cleanup();
});
