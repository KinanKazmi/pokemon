import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { Details } from '../src/Views/Details';
import { store } from '../setupTests';
import { useFetchPokemonDetailsQuery } from '../src/apis/api';

const mockData = {
  name: 'name',
  height: 'height',
  weight: 'weight',
  types: [{ type: { name: 'type name' } }],
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
  useFetchPokemonDetailsQuery: jest.fn(() => (mockResponse)),
}));

describe('Details', () => {
  beforeEach(() => {
    useFetchPokemonDetailsQuery.mockClear();
  });
  it('should render data after API request', async () => {
    useFetchPokemonDetailsQuery.mockReturnValueOnce(mockResponse);
    const route = { params: { pokemon: { url: 'https://pokeapi.co/api/v2/pokemon/1/'} } };
    const component = (
      <Provider store={store}>
        <Details route={route}/>
      </Provider>
    );
    const { getByTestId } = render(component);
    const element = getByTestId('loaded details');
    expect(element).toBeTruthy();
  });
});