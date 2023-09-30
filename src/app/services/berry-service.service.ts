import { Injectable } from '@angular/core';
import { Berry, BerryClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class BerryServiceService {

  constructor() { }

  async getBerryById(_id:number):Promise<Berry> {
    const api = new BerryClient();

    return await api.getBerryById(_id);
  }

  async getBerryByName(name:string):Promise<Berry> {
    const api = new BerryClient();

    return await api.getBerryByName(name);
  }
}
