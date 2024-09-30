import { Component, Input } from '@angular/core';
import { navItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'my-cv-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  public navItems: navItem[] = [];
  
}
