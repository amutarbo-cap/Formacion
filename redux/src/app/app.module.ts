import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers } from './store';
import { PokeComponent } from './features/poke/poke.component';

@NgModule({
  declarations: [AppComponent, PokeComponent],
  imports: [BrowserModule, HttpClientModule, StoreModule.forRoot(reducers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

