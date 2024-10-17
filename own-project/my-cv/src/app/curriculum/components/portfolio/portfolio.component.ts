import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { project } from '../../interfaces/project-interface';

@Component({
  selector: 'curriculum-portfolio',
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent implements OnInit {

  public projects: project[] = [];

  constructor(private curriculumService: CurriculumService) {}

  ngOnInit(): void {
    this.projects = this.curriculumService.getProjects();
  }
}
