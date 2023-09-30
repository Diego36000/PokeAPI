import { Component, Input } from '@angular/core';
import { Item } from 'pokenode-ts';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.css']
})
export class ItemContentComponent {

  @Input() itemList: Item[] = [];

}
