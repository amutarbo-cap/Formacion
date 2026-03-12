import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokeApiService, PokeResult } from './poke-api.service';
import { AppState } from '../../store';
import { loadPokemons, loadPokemonsSuccess, loadPokemonsFailure } from '../../store/actions';
import { selectPokemons, selectLoading, selectError } from '../../store/selectors';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.scss'],
})
export class PokeComponent implements OnInit {
  pokemons$: Observable<PokeResult[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>, private pokeApiService: PokeApiService) {
    this.pokemons$ = this.store.select(selectPokemons);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.store.dispatch(loadPokemons());

    this.pokeApiService.getPokemons().subscribe({
      next: (pokemons) => this.store.dispatch(loadPokemonsSuccess({ pokemons })),
      error: (err) => this.store.dispatch(loadPokemonsFailure({ error: err.message || 'Error' })),
    });
  }
}
