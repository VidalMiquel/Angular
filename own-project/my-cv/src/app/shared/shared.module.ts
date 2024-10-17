import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,         // Declare NavbarComponent here
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,         // Declare NavbarComponent here
    ProjectCardComponent,
  ]
})
export class SharedModule { }
