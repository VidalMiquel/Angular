import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeoresModule } from './heores/heores.module';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';

//https://localhost:4200
const routes: Routes = [
{
  path:'auth',
  loadChildren: () => import ('./auth/auth.module').then(m=> m.AuthModule),
  canActivate: [PublicGuard],
  canMatch:[
    PublicGuard
  ]
},
{
  path:'heroes',
  loadChildren: () => import ('./heores/heores.module').then(m=> m.HeoresModule),
  canActivate: [AuthGuard],
  canMatch:[
    AuthGuard
  ]
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
