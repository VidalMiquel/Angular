import { Component, OnInit } from '@angular/core';
import { MyCvService } from '../services/my-cv.service';
import { navItem } from '../interfaces/nav-item.interface';

@Component({
  selector: 'my-cv-header-page',
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.css'
})

//FATHER

export class HeaderPageComponent {


  constructor(public myCvService:MyCvService){}

  get navItems(): navItem[]{
    return this.myCvService.navItems;
  }

}