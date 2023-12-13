import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemonData = createAsyncThunk('pokemon/pokemon', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  return data.results;
});

export const fetchPokemonDetails = createAsyncThunk('pokemon/pokemonDetails', async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
