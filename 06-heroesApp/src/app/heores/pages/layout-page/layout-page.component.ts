import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sideBarItems = [
    {label:"List", icon:"label", url: "./list"},
    {label:"Add", icon:"add", url: "./new-hero"},
    {label:"Search", icon:"search", url: "./search"}
  ]
  constructor(private autService: AuthService, private router:Router){}

  get user():User | undefined{
    return this.autService.currentUser;
  }


  onLogout(){
    this.autService.logOut();
    this.router.navigate(['/auth/login'])
  }


}
