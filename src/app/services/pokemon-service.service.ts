import { Injectable } from '@angular/core';
import { Pokemon, PokemonClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  async getPokemonByID(_id: number): Promise<Pokemon> {
    const api = new PokemonClient();

    return await api.getPokemonById(_id);
  }

  async getPokemonByName(name:string):Promise<Pokemon> {
    const api = new PokemonClient();

    return await api.getPokemonByName(name);
  }
}
