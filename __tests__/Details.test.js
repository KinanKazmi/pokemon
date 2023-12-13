import React from 'react';
import { render } from '@testing-library/react-native';
import { Details } from '../src/Views/Details';

test('renders Details component', () => {
  const { getByText } = render(<Details route={{ params: { pokemon: { url: 'pokemon/1' } } }} />);
  const element = getByText('Name:');
  expect(element).toBeTruthy();
});