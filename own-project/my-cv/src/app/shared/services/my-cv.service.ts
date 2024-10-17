import { Injectable } from '@angular/core';
import { navItem } from '../../curriculum/interfaces/interfaces/nav-item.interface';

@Injectable({
  providedIn: 'root'
})

export class MyCvService {

  public navItems: navItem[] = [{

    redirectName: 'portfolio',
    name: 'Portfolio'
  }, {
    redirectName: 'about',
    name: 'About'
  },{
    redirectName: 'contact',
    name: 'Contact'
  }
  ];
}
