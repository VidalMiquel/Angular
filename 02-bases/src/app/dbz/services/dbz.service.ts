import { Injectable } from '@angular/core'; //Decorator
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable(
  { providedIn: 'root' }
)
export class DBZService {

  public characters: Character[] = [{
    name: 'Killin',
    power: 1000,
    id: uuid()
  },{
    name:'Goku',
    power: 9500,
    id: uuid()
  },
  {
    name:'Vegeta',
    power: 7500,
    id: uuid()
  }];

  //using ... to add the rest of the attributs.


  addCharacter (character: Character):void{
    //Creaing  new charcter addind a uuid(). Here we have separate logical layers.
    const newCharcater: Character = {
      id: uuid(), ...character
    }
    this.characters.push(newCharcater);
  }

  deleteCharacterbyId(id:string):void{
    //Return all the charcater less the character with the given id.
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
