import { Component, OnInit } from '@angular/core';
import { Berry, Item, Pokemon } from 'pokenode-ts';
import { ShareDataService } from './services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeAPI';

  pokemonList:Pokemon[] = [];
  berryList:Berry[] = [];
  itemList:Item[] = [];


  constructor(private shareData:ShareDataService) { }

  ngOnInit(): void {
    this.pokemonList = this.shareData.getPokemonList();
    this.berryList = this.shareData.getBerryList();
    this.itemList = this.shareData.getItemList();
  }

}
