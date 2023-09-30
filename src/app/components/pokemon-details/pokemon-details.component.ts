import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon!: Pokemon;

  constructor(private router:ActivatedRoute, private shareData:ShareDataService) {

  }

  ngOnInit() {
    this.pokemon = this.shareData.getPokemon();
  }
}
