import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokeState } from './state';

export const selectPokeState = createFeatureSelector<PokeState>('poke');

export const selectPokemons = createSelector(selectPokeState, (state) => state.pokemons);
export const selectLoading = createSelector(selectPokeState, (state) => state.loading);
export const selectError = createSelector(selectPokeState, (state) => state.error);
