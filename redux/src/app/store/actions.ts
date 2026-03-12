import { createAction, props } from '@ngrx/store';
import { Poke } from './state';

export const loadPokemons = createAction('[Poke] Load Pokemons');
export const loadPokemonsSuccess = createAction('[Poke] Load Pokemons Success', props<{ pokemons: Poke[] }>());
export const loadPokemonsFailure = createAction('[Poke] Load Pokemons Failure', props<{ error: string }>());
