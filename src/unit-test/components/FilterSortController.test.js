import '@testing-library/jest-dom';

import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FilterSortController from '../../components/FilterSortController';
import store from '../mocks/store';
import { initialState } from '../mocks/reducers';

initialState.subscription = [{ kanji: { character: '手', stroke: 7 }, radical: { character: '⺅' } }, { kanji: { character: '何', stroke: 7 }, radical: { character: '⺅' } }];

test('it renders an image and two lines of text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FilterSortController
          sorting={1}
          updateFilter={() => null}
          filterCallback={() => null}
          toggleSorting={() => null}
          toggleCallback={() => null}
          loadVisible={() => true}
        />
      </BrowserRouter>
    </Provider>,
  );

  const bar = screen.getByTestId('sort-bar');
  const children = bar.getElementsByTagName('div');

  expect(bar).toBeTruthy();
  expect(children.length).toBe(2);
  expect(children[0].getElementsByTagName('i').length).toBe(2);
  expect(children[1].getElementsByTagName('form').length).toBe(1);

  cleanup();
});
