import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

//https://localhost:4200/heroes
const routes: Routes = [
  {
    path:"",
    component: LayoutPageComponent,
    children: [
      { //https://localhost:4200/heroes/new-hero
        path:'new-hero',
        component: NewPageComponent
      },      { //https://localhost:4200/heroes/search
        path:'search',
        component: SearchPageComponent
      },
      { //https://localhost:4200/heroes/edit/:id
        path:'edit/:id',
        component: NewPageComponent,
      },
      { //https://localhost:4200/heroes/list
        path:'list',
        component: ListPageComponent,
      },
      { //https://localhost:4200/heroes/:id
        path:':id',
        component: HeroPageComponent,
      },
      { //https://localhost:4200/heroes/:id
        path:'**',
        redirectTo:'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeoresRoutingModule { }
