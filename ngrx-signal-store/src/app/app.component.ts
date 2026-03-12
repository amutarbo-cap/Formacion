import { Component } from '@angular/core';
import { PokeComponent } from './features/poke/poke.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokeComponent],
  template: '<app-poke />',
})
export class AppComponent {}
