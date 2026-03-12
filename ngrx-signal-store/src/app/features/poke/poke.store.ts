import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { PokeApiService } from './poke-api.service';
import { initialPokeState, PokeState } from './poke.model';

export const PokeStore = signalStore(
  { providedIn: 'root' },

  withState<PokeState>(initialPokeState),

  withMethods((store, pokeService = inject(PokeApiService)) => ({
    async loadPokemons(): Promise<void> {
      patchState(store, { loading: true, error: null });
      try {
        const pokemons = await firstValueFrom(pokeService.getPokemons());
        patchState(store, { pokemons, loading: false });
      } catch {
        patchState(store, { error: 'Error al cargar los pokémons', loading: false });
      }
    },
  })),
);
