import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '../../components/Loader';

test('it renders a div', () => {
  render(<Loader />);

  const div = '<div class="Loader_spinner';

  expect(screen.queryByText(div)).toBeDefined();
});
