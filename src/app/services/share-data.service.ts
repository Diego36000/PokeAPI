import { Injectable } from '@angular/core';
import { Berry, Item, Pokemon } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private pokemon!: Pokemon;
  private pokemonList!:Pokemon[];

  private berry!: Berry;
  private berryList!:Berry[];

  private item!: Item;
  private itemList!:Item[];

  setPokemon(pokemon:Pokemon):void {
    this.pokemon = pokemon;
  }

  getPokemon():Pokemon {
    return this.pokemon;
  }

  setPokemonList(pokemonList:Pokemon[]):void {
    this.pokemonList = pokemonList;
  }

  getPokemonList():Pokemon[] {
    return this.pokemonList;
  }

  setBerry(berry:Berry):void {
    this.berry = berry;
  }

  getBerry():Berry {
    return this.berry;
  }

  setBerryList(berries:Berry[]) {
    this.berryList = berries;
  }

  getBerryList():Berry[] {
    return this.berryList
  }

  setItem(item:Item):void {
    this.item = item;
  }

  getItem():Item {
    return this.item;
  }

  setItemList(items:Item[]):void {
    this.itemList = items;
  }

  getItemList():Item[] {
    return this.itemList;
  }

}
