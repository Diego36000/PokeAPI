import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'pokenode-ts';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  @Input() pokemonList: Pokemon[] = [];
  @Input() isShiny: Boolean = false;

  constructor(private router:Router) {}

  ngOnInit(): void {}

  seeDetails(data:Pokemon) {
    this.router.navigateByUrl(`pokemon/${data.id.toString()}`, {state:{pokemon:data}})
  }
}
