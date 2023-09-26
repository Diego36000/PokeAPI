import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon!: Pokemon;

  constructor(private router:ActivatedRoute, private pokemonService: PokemonServiceService) {

  }

  async ngOnInit() {
    this.router.params.subscribe(async params => {
      const id = +params['id'];

      try {
        this.pokemon = await this.pokemonService.getPokemonByID(id);
      } catch (error) {
        console.log("An error ocurred", error);
      }
    });
  }
}
