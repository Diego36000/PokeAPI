import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { ShareDataService } from 'src/app/services/share-data.service';


@Component({
  selector: 'app-pokemon-content',
  templateUrl: './pokemon-content.component.html',
  styleUrls: ['./pokemon-content.component.css']
})
export class PokemonContentComponent implements OnInit {

  @Input() pokemonList: Pokemon[] = [];
  @Input() isShiny: Boolean = false;

  constructor(private router:Router, private shareData:ShareDataService) {}

  ngOnInit(): void {
    this.pokemonList = this.shareData.getPokemonList();
  }

  seeDetails(data:Pokemon) {
    this.shareData.setPokemon(data);
    this.router.navigateByUrl(`pokemon/${data.id.toString()}`)
  }
}
