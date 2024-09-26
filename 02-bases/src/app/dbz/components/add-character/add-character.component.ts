import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

//SON
export class CharacterComponent {
  //Event issuer. We must indicate with object type we want to emit. We are working with generics.
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{

    if (this.character.name.length == 0) return;
    //Emitting the new character
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }
}



