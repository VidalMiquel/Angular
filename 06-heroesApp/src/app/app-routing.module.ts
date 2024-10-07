import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeoresModule } from './heores/heores.module';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

//https://localhost:4200
const routes: Routes = [
{
  path:'auth',
  loadChildren: () => import ('./auth/auth.module').then(m=> m.AuthModule),
},
{
  path:'heroes',
  loadChildren: () => import ('./heores/heores.module').then(m=> m.HeoresModule),
},
{
  path:'404',
  component:Error404PageComponent
},
{
  path:'',
  redirectTo:'heroes',
  pathMatch:'full' //Path must be ''
},{
  //Any other path must be an error
  path:'**',
  redirectTo:'404'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
