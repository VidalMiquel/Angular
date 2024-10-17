import { Component, Input } from '@angular/core';
import { navItem } from '../../../curriculum/interfaces/nav-item.interface';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  public navItems: navItem[] = [];

}
