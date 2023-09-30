import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  @Output() pokemonList = new EventEmitter<Pokemon[]>();
  @Output() isShiny = new EventEmitter<Boolean>();

  pokemonArr:Pokemon[] = [];
  InputName = new FormControl();
  InputShiny = new FormControl();

  constructor(private pokemonService:PokemonServiceService) {}

  ngOnInit(): void {}

  sendPokemon() {
    this.pokemonList.emit(this.pokemonArr);
  }

  isShinySelected() {
    console.log(this.InputShiny.value);
    this.isShiny.emit(this.InputShiny.value);
  }

  async getPokemonByName() {
    const name:string = this.InputName.value;
    let pokemon:Pokemon|undefined;

   if(!this.isEmpty(name)) {
    try {
      pokemon = await this.pokemonService.getPokemonByName(name.toLowerCase());
      if(!this.pokemonArr.find(poke => poke.name === name)) {
        this.pokemonArr.push(pokemon);
        this.sendPokemon();
      } else {
        console.log("Pokemon already searched");
      }
    } catch (error) {
      console.log("An error ocurred", error);
    }
   } else {
    console.log("Input invalido");
   }
  }

  isEmpty(str:String):boolean{ return (!str) }
}
