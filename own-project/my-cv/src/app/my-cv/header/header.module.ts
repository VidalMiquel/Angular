import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavBarTogglerComponent } from './components/nav-bar-toggler/nav-bar-toggler.component';
import { HeaderPageComponent } from './pages/header-page.component';

@NgModule({
  declarations: [
    NavbarComponent,         // Declare NavbarComponent here
    NavBarTogglerComponent,
    HeaderPageComponent,
  ],
  imports: [         
    CommonModule
  ],
  exports: [
    HeaderPageComponent
  ]
})
export class HeaderModule { }
