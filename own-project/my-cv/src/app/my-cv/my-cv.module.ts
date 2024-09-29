import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header/pages/header-page.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    HeaderModule
  ]
})
export class MyCvModule { }
