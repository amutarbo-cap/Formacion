import { Component, OnInit, inject } from '@angular/core';
import { PokeStore } from './poke.store';

@Component({
  selector: 'app-poke',
  standalone: true,
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.scss',
})
export class PokeComponent implements OnInit {
  readonly store = inject(PokeStore);

  ngOnInit(): void {
    this.store.loadPokemons();
  }
}
