import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { SharePokemonService } from 'src/app/services/share-pokemon.service';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  @Input() pokemonList: Pokemon[] = [];
  @Input() isShiny: Boolean = false;

  constructor(private router:Router, private sharePokemon:SharePokemonService) {}

  ngOnInit(): void {}

  seeDetails(data:Pokemon) {
    this.sharePokemon.setPokemon(data);
    this.router.navigateByUrl(`pokemon/${data.id.toString()}`)
  }
}
