import { Component } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { navItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'curriculum-nav',
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {

  navItems: navItem[] = [];

  constructor(private curriculumService: CurriculumService) {}

  ngOnInit(): void {
    this.navItems = this.curriculumService.getNavItems();
  }
}
