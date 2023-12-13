import React from 'react';
import { View, Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { Details } from '../src/Views/Details';
import { store } from './setupTests';
import {usePokemonDetailsQuery} from '../src/apis/api';


const hookMocked = jest.fn();
jest.doMock('../src/apis/api', () => ({
  __esModule: true,
  usePokemonDetailsQuery: () => hookMocked()
}));

describe('Details', () => {
  it('should render data after API request', async () => {
    const route = { params: { pokemon: { url: 'https://pokeapi.co/api/v2/pokemon/1/'} } };
    const component = (
      <Provider store={store}>
        <Details route={route}/>
      </Provider>
    );
    const { getByText } = render(component);
    const element = getByText('Name:');
    expect(element).toBeTruthy();

    // const mockData = {
    //   name: 'name',
    //   height: 'height',
    //   weight: 'weight',
    // };
    // usePokemonDetailsQuery.mockReturnValueOnce({
    //   data: mockData,
    //   isLoading: false,
    //   isSuccess: true,
    //   isError: false,
    //   error: null,
    // });


    // Check that loading state is not displayed
    // expect(screen.queryByText('Loading...')).toBeNull();

  });
});