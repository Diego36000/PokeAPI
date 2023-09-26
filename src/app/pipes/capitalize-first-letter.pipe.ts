import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    const words = value.split('-');
    const pokemonName = words[0];
    if (words.length >= 2 && words[1].toLowerCase() === 'hisui') {
      words[0] = 'Hisuian';
      words[1] = this.capitalizeFirstLetter(pokemonName);
      return words.join(' ');
    } else if (words.length >= 2 && words[1].toLowerCase() === 'alola') {
      words[0] = 'Alolan';
      words[1] = this.capitalizeFirstLetter(pokemonName);
      return words.join(' ');
    } else if (words.length >= 2 && words[1].toLowerCase() === 'galar') {
      words[0] = 'Galarian';
      words[1] = this.capitalizeFirstLetter(pokemonName);
      return words.join(' ');
    } else {
      return value
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => {
        if (word) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
          return '';
        }
      })
      .join(' ');
    }

    return words.join(' ');
  }

  capitalizeFirstLetter(str:string):string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
