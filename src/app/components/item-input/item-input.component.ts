import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item } from 'pokenode-ts';
import { ItemServiceService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent {

  @Output() itemList = new EventEmitter<Item[]>();

  InputName = new FormControl();
  ItemArr: Item[] = [];

  constructor(public itemService:ItemServiceService)  {

  }

  sendItem() {
    this.itemList.emit(this.ItemArr);
  }

  async getItemByName() {
    const name:string = this.InputName.value;
    let pokemon:Item|undefined;

   if(!this.isEmpty(name)) {
    try {
      pokemon = await this.itemService.getItemByName(name.toLowerCase());
      if(!this.ItemArr.find(poke => poke.name === name)) {
        this.ItemArr.push(pokemon);
        this.sendItem();
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
