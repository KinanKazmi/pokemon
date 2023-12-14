import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Main from '../src/Views/Main';
import { store } from '../setupTests';
import { useFetchPokemonDataQuery } from '../src/apis/api';

const mockData = {
  results: [{
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
  }],
};

const mockResponse = {
  data: mockData,
  isLoading: false,
  isSuccess: true,
  isError: false,
  error: null,
};

jest.mock('../src/apis/api', () => ({
  __esModule: true,
  useFetchPokemonDataQuery: jest.fn(() => (mockResponse)),
}));

describe('Main', () => {
  beforeEach(() => {
    useFetchPokemonDataQuery.mockClear();
  });
  it('should render data after API request', async () => {
    useFetchPokemonDataQuery.mockReturnValueOnce(mockResponse);
    const component = (
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const { getByText } = render(component);
    const element = getByText('List of Pokemon:');
    expect(element).toBeTruthy();
  });
});