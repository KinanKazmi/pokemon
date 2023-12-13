import configureStore from 'redux-mock-store';
import fetchMock from 'jest-fetch-mock';
// fetchMock.enableMocks();

const mockStore = configureStore([]);

const initialState = {
  api: {
    pokemonDetails: {
      name: 'Bulbasaur',
      height: 7,
      weight: 69,
      types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
    },
    status: 'succeeded',
    error: null,
  },
};

const store = mockStore(initialState);

jest.doMock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => store.dispatch),
}));

export { store };
