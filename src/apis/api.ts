import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PokemonType {
  name: string,
  url: string
}

export interface PokemonDetailsType {
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    pokemon: builder.query({
      query: () => 'pokemon',
    }),
    pokemonDetails: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { usePokemonQuery, usePokemonDetailsQuery } = api;
