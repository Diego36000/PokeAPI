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

  pokemonArr:Pokemon[] = [];
  //InputID = new FormControl();
  InputName = new FormControl();

  constructor(private pokemonService:PokemonServiceService) {}

  ngOnInit(): void {}

  sendPokemon() {
    this.pokemonList.emit(this.pokemonArr);
  }

  /*
  async getPokemonByID() {
    const id:number = this.InputID.value;
    let pokemon:Pokemon|undefined;
    if(!Number.isNaN(Number.parseInt(id.toString()))) {
      try {
        pokemon = await this.pokemonService.getPokemonByID(id);
        this.pokemonArr.push(pokemon);
        this.sendPokemon();
      } catch (error) {
        console.log("An error ocurred", error);
      }
    } else {
      console.log("Input invalido");
    }
  }
  */

  async getPokemonByName() {
    const name:string = this.InputName.value;
    let pokemon:Pokemon|undefined;
    console.log(name);

   if(!this.isEmpty(name)) {
    try {
      pokemon = await this.pokemonService.getPokemonByName(name.toLowerCase());
      this.pokemonArr.push(pokemon);
      this.sendPokemon();
    } catch (error) {
      console.log("An error ocurred", error);
    }
   } else {
    console.log("Input invalido");
   }
  }

  isEmpty(str:String):boolean {
    return (!str);
  }
}
