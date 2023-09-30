import { Component } from '@angular/core';
import { Item } from 'pokenode-ts';

@Component({
  selector: 'app-item-main',
  templateUrl: './item-main.component.html',
  styleUrls: ['./item-main.component.css']
})
export class ItemMainComponent {

  itemList:Item[] = [];

  collectItem(itemList:Item[]) {
    this.itemList = itemList;
  }
}
