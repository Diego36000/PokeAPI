import { Component,OnInit, Input } from '@angular/core';
import { Pokemon } from 'pokenode-ts';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  @Input() pokemonList: Pokemon[] = [];
  @Input() isShiny: Boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
