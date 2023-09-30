import { Injectable } from '@angular/core';
import { Item, ItemClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor() { }

  async getItemByID(_id:number):Promise<Item> {
    const api = new ItemClient()

    return await api.getItemById(_id);
  }

  async getItemByName(name:string):Promise<Item> {
    const api = new ItemClient()

    return await api.getItemByName(name);
  }
}
