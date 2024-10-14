import { Component } from '@angular/core';

interface MenuItem {
  title:string;
  router:string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    {title: 'Basicos', router: './reactive/basic'},
    {title: 'Dinàmicos', router: './reactive/dynamic'},
    {title: 'Switches', router: './reactive/switches'}
  ];

  public authMenu: MenuItem[] =[{title: 'Registro', router: './auth'}];
}
