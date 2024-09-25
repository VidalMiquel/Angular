import { Component } from '@angular/core';

//Decorator
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

//Class
export class HeroComponent {
  public name:String = 'IronMan';
  public age: number = 45

  //Invocated as a property
  get CapitalizeName():string{
    return this.name.toUpperCase();
  }
  setName(name:string):void{
    this.name = name;
  }

  setAge(age:number):void{
    this.age = age;
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  resetForm():void{
    this.name = "IronMan";
    this.age = 45;
    //document.querySelectorAll('h1').forEach(element => {
    //  element.innerHTML =      '<h1> Desde Angular</h1>';
    //});

  }
}
