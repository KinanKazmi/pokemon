import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {REACT_APP_API_URL_BASE } from '@env';
const baseUrl = REACT_APP_API_URL_BASE || 'https://pokeapi.co/api/v2';

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
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    fetchPokemonData: builder.query({
      query: () => 'pokemon'
    }),
    fetchPokemonDetails: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useFetchPokemonDataQuery, useFetchPokemonDetailsQuery } = api;
