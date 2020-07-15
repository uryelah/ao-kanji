import '@testing-library/jest-dom';

import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Main from '../../components/Main';
import store from '../mocks/store';
import { initialState } from '../mocks/reducers';

test('it renders an image and two lines of text', () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <Main actions={{ mockAction: () => null }} state={initialState} />
      </Router>
    </Provider>,
  );

  const header = screen.getByTestId('header');

  const group = screen.getByTestId('group');

  expect(header).toBeTruthy();

  expect(header.getElementsByTagName('option').length).toBe(3);

  expect(group).toBeTruthy();

  expect(group.getElementsByClassName('card').length).toBe(6);

  cleanup();
});
