import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    MainPageComponent,
    ProjectPageComponent,
    PortfolioComponent,
    AboutComponent,
    HeaderComponent,
    NavComponent,
  ],
  imports: [CommonModule,
    SharedModule
  ],
  exports: [    MainPageComponent,
    ProjectPageComponent,
    PortfolioComponent,
    AboutComponent,
    HeaderComponent,
  NavComponent],
})
export class CurriculumModule {}
