import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './curriculum/pages/main-page/main-page.component';

const routes: Routes = [{
  path:'', component: MainPageComponent
},
// {
//   path:'project/:id', component: ProjectPageComponent
// },
{
  path:'**', redirectTo:'', pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
