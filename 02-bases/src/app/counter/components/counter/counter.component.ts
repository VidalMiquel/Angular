import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  counter: number = 0;

  constructor() {}

  increaseBy(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 0;
  }
}
