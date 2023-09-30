import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { SharePokemonService } from 'src/app/services/share-pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon!: Pokemon;

  constructor(private router:ActivatedRoute, private sharePokemon:SharePokemonService) {

  }

  ngOnInit() {
    this.pokemon = this.sharePokemon.getPokemon();
  }
}
