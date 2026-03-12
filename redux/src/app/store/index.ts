import { pokeReducer } from './reducer';
import { PokeState } from './state';

export interface AppState {
  poke: PokeState;
}

export const reducers = {
  poke: pokeReducer,
};
