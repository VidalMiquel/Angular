import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  //onDelete is connected to methods.
  public onDelete: EventEmitter<string> = new EventEmitter();

  //ListComponent cloud recive a propery called: characterList
  @Input()
  public characterList: Character[] = [
    //Default value if anyone doesn't send anything.
    {name: `Trunk`,
    power: 10
  }
  ]

  onDeleteCharacter(id?:string):void{
    //Check id is not ?
    if (!id) return;
    this.onDelete.emit(id);
  }

}
