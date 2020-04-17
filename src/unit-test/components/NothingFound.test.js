import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import NothingFound from '../../components/NothingFound';

test('it renders an image and two lines of text', () => {
  render(<NothingFound />);

  const message1 = "<strong>無 </strong><em>(mu) </em>means 'nothing'</p>";

  const message2 = 'That\'s what was found...';

  const img = 'src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Wu_%28negative%29.svg"';

  expect(screen.queryByText(img)).toBeDefined();
  expect(screen.queryByText(message1)).toBeDefined();
  expect(screen.queryByText(message2)).toBeDefined();
});
