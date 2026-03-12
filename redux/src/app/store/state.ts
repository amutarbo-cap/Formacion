export interface Poke { name: string; url: string; }

export interface PokeState {
  pokemons: Poke[];
  loading: boolean;
  error: string | null;
}

export const initialPokeState: PokeState = {
  pokemons: [],
  loading: false,
  error: null,
};
