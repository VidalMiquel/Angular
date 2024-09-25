import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //ListComponent cloud recive a propery called: characterList
  @Input()
  public characterList: Character[] = [
    //Default value if anyone doesn't send anything.
    {name: `Trunk`,
    power: 10
  }
  ]

}
