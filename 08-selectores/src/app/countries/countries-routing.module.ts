import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

const routes: Routes = [
  { path: '',
    children:[
     {path:'selector', component: SelectorPageComponent},
     {path:'**', redirectTo: 'selector'}
    ]
  } // Default route for the feature module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
