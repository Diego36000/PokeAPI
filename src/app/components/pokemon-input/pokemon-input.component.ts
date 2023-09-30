import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: './pokemon-input.component.html',
  styleUrls: ['./pokemon-input.component.css']
})
export class PokemonInputComponent implements OnInit, OnDestroy {

  @Output() pokemonList = new EventEmitter<Pokemon[]>();
  @Output() isShiny = new EventEmitter<Boolean>();

  pokemonArr:Pokemon[] = [];

  formInputs!: FormGroup;
  InputName = new FormControl();
  InputShiny = new FormControl();

  constructor(private pokemonService:PokemonServiceService, private shareData:ShareDataService) {}

  ngOnInit(): void {
    this.formInputs = new FormGroup({
      name: new FormControl(this.InputName.value, [Validators.pattern('^[a-zA-Z]?$')]),
      shiny: new FormControl(this.InputShiny.value)
    });

    if(this.shareData.getPokemonList()) {
      this.pokemonArr = this.shareData.getPokemonList();
    }
  }

  ngOnDestroy(): void {
    this.shareData.setPokemonList(this.pokemonArr);
  }

  sendPokemon() {
    this.pokemonList.emit(this.pokemonArr);
  }

  isShinySelected() {
    this.isShiny.emit(this.InputShiny.value);
  }

  async getPokemonByName() {
    const name:string = this.InputName.value.toLowerCase();
    let pokemon:Pokemon|undefined;

   if(!this.isEmpty(name)) {
    try {
      pokemon = await this.pokemonService.getPokemonByName(name);
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

  isEmpty(str:string):boolean { return (!str) }
}
