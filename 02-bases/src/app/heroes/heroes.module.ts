import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./components/list/list.component";
import { HeroComponent } from "./components/hero/hero.component";


@NgModule({
//Declared components
  declarations: [
    HeroComponent,
    ListComponent
  ],
// Export the components to app.modules.ts
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule{}


