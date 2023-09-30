import { Injectable } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class SharePokemonService {

  private pokemon!: Pokemon;

  setPokemon(pokemon:Pokemon):void {
    this.pokemon = pokemon;
  }

  getPokemon():Pokemon {
    return this.pokemon;
  }
}
