import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface PokeResult {
  name: string;
  url: string;
}

interface PokeResponse {
  results: PokeResult[];
}

@Injectable({ providedIn: 'root' })
export class PokeApiService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokeResult[]> {
    return this.http
      .get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=20')
      .pipe(map((resp) => resp.results));
  }
}
