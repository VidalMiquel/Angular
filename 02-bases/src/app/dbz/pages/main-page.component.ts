import { Component, OnInit } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

//FATHER
export class MainPageComponent {

//Dependency Injection

  constructor(private dbzService:DBZService ){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterbyId(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}
