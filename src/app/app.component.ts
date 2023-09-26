import { Component } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokeAPI';

  pokemonList:Pokemon[] = [];

  collectPokemon(pokemonList:Pokemon[]) {
    this.pokemonList = pokemonList;
  }
}
