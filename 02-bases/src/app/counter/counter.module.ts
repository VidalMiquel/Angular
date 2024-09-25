import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

//Definition of my counter components to aggrupate them.
@NgModule({
  declarations: [
    CounterComponent

  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule{}
