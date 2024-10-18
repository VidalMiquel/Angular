import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/header/nav/nav.component';
import {  HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { RemoveDashPipe } from './pipes/remove-dash.pipe';
import { ProjectCardComponent } from './components/portfolio/project-card/project-card.component';
import { IntroductionComponent } from './components/header/introduction/header.component';
@NgModule({
  declarations: [
    MainPageComponent,
    PortfolioComponent,
    AboutComponent,
    IntroductionComponent,
    NavComponent,
    ProjectCardComponent,
    RemoveDashPipe
  ],
  imports: [CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [    MainPageComponent,
    PortfolioComponent,
    AboutComponent,
    NavComponent],
})
export class CurriculumModule {}
