import { createReducer, on } from '@ngrx/store';
import { initialPokeState } from './state';
import { loadPokemons, loadPokemonsSuccess, loadPokemonsFailure } from './actions';

export const pokeReducer = createReducer(
  initialPokeState,
  on(loadPokemons, (state) => ({ ...state, loading: true, error: null })),
  on(loadPokemonsSuccess, (state, { pokemons }) => ({ ...state, loading: false, pokemons })),
  on(loadPokemonsFailure, (state, { error }) => ({ ...state, loading: false, error })),
);
