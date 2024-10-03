import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ''
})
export class MenuComponent {
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
      this.menuItems = [
          { label: 'Angular Pipes', icon: 'pi pi-desktop', items:[
            {label: 'Dates and texts', icon: 'pi pi-align-left', routerLink: "/"},
            {label: 'Numbers', icon: 'pi pi-dollar', routerLink:'numbers'},
            {label: 'Uncommon', icon: 'pi pi-globe', routerLink:'uncommon'}
          ] },
            {label: 'Personalized Pipes', icon: 'pi pi-cog', items:[
              {label: 'Other element', icon: 'pi pi-cog', items: []}
          ] }
      ];
  }
}
