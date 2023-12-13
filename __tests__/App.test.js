import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../src/App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  const element = getByText('List of Pokemon:');
  expect(element).toBeTruthy();
});