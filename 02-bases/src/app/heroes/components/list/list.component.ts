import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Spiderman', 'IRonman', 'Hulk','She Hulk', 'Thor'];
  //undefined becasue pop() could return an undefinded.
  public deletedHero?:String = '';

  removeLastHero():void{
    //return a hero or undefinded.
   this.deletedHero = this.heroNames.pop();
  }
}
