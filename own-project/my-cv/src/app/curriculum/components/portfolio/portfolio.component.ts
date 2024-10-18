import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { GitHubProject } from '../../interfaces/project-interface';

@Component({
  selector: 'curriculum-portfolio',
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent implements OnInit{

  public githubProjects?: GitHubProject[] = [];

  constructor(private curriculumService: CurriculumService){}

  ngOnInit(): void {
    this.curriculumService.getProjectsHttpRequest()
    .subscribe(projects => this.githubProjects = projects);
  }


}
