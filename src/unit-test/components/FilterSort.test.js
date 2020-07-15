import '@testing-library/jest-dom';

import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FilterSort from '../../components/FilterSort';
import store from '../mocks/store';
import { initialState } from '../mocks/reducers';

initialState.subscription = [{ kanji: { character: '手', stroke: 7 }, radical: { character: '⺅' } }, { kanji: { character: '何', stroke: 7 }, radical: { character: '⺅' } }];

test('it renders an image and two lines of text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FilterSort
          history={{ length: 2 }}
          actions={{ mockAction: () => null }}
          state={initialState}
          loadVisible={() => true}
          clickHandler={() => null}
        />
      </BrowserRouter>
    </Provider>,
  );

  const kan1 = screen.getByTestId('手');
  const kan2 = screen.getByTestId('何');

  expect(kan1).toBeTruthy();
  expect(kan2).toBeTruthy();
  expect(kan1.getElementsByTagName('h2')[0]).toBeTruthy();
  expect(kan2.getElementsByTagName('h2')[0]).toBeTruthy();
  expect(kan1.getElementsByTagName('p')[0]).toBeTruthy();
  expect(kan2.getElementsByTagName('p')[0]).toBeTruthy();
  cleanup();
});
