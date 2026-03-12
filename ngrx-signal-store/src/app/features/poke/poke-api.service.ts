import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Poke } from './poke.model';

interface PokeApiResponse {
  results: Poke[];
}

@Injectable({ providedIn: 'root' })
export class PokeApiService {
  private http = inject(HttpClient);

  getPokemons(): Observable<Poke[]> {
    return this.http
      .get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=20')
      .pipe(map((res) => res.results));
  }
}
