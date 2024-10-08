import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeoresRoutingModule } from './heores-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/flat.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    HeroImagePipe

  ],
  imports: [
    CommonModule,
    HeoresRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeoresModule { }
