import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = "Miquel";
  public gender: 'male'|'female' = 'male';
  public invitationMap={
    'male': 'he is',
    'female': 'she is'
  }

  public changeClient():void{
    this.name = "Melisa";
    this.gender = "female";
  }

  //i18nPlural
  public clients:string[]  = ['Maria', 'Fernando','Melisa','Ernando','Carla','Juan','Paco']
  public clientsMap={
    '=0': 'there is not any customer waiting',
    '=1': 'we have 1 customer waiting',
    'other': 'we have # customers waiting'
  }

  public deleteClient():void{
    this.clients.shift();
  }

  //KeyValuePipe
  public person = {
    name: 'Fernando',
    age: 36,
    addres: 'NY'
  }

  //Async Pipe
  // public myObservableTimer = interval(2000).pipe(tap (value => console.log('tap:', value)));

}
