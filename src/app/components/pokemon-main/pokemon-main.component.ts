import { Component } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.css']
})
export class PokemonMainComponent {
  pokemonList:Pokemon[] = [];
  isShiny:Boolean = false;

  collectPokemon(pokemonList:Pokemon[]) {
    this.pokemonList = pokemonList;
  }

  setShinySprites(isShiny:Boolean) {
    this.isShiny = isShiny;
  }
}
