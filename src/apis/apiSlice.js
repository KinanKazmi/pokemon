import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {REACT_APP_API_URL_BASE } from '@env';

const baseUrl = REACT_APP_API_URL_BASE || 'https://pokeapi.co/api/v2';

export const fetchPokemonData = createAsyncThunk('pokemon/pokemon', async () => {
  const response = await fetch(`${baseUrl}/pokemon`);
  const data = await response.json();
  return data.results;
});

export const fetchPokemonDetails = createAsyncThunk('pokemon/pokemonDetails', async (id) => {
  const response = await fetch(`${baseUrl}/pokemon/${id}`);
  const data = await response.json();
  return data;
});

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    pokemonData: [],
    pokemonDetails: null,
    status: 'idle',
    error: null,
    api: {
      queries: {},
      mutations: {},
      provided: {},
      subscriptions: {},
      config: {
        online: true,
        focused: true,
        middlewareRegistered: true,
        refetchOnFocus: false,
        refetchOnReconnect: false,
        refetchOnMountOrArgChange: false,
        keepUnusedDataFor: 60,
        reducerPath: 'api',
      },
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemonData = action.payload;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemonDetails = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
