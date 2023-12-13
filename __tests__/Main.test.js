import React from 'react';
import { render } from '@testing-library/react-native';
import Main from '../src/Views/Main';

test('renders Main component', () => {
  const { getByText } = render(<Main />);
  const element = getByText('List of Pokemon:');
  expect(element).toBeTruthy();
});
