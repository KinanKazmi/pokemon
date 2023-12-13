import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeModules } from 'react-native';
import App from '../src/App';

NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  forceTouchAvailable: jest.fn(),
  State: {},
  Directions: {}
};

NativeModules.PlatformConstants = {
  forceTouchAvailable: false,
};

NativeModules.UIManager = {
  RCTView: () => ({
    directEventTypes: {},
  }),
};

test('renders App component', () => {
  const { getByText } = render(<App />);
  const element = getByText('List of Pokemon:');
  expect(element).toBeTruthy();
});