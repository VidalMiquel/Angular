import { Component, Input } from '@angular/core';
import { GitHubProject } from '../../../interfaces/project-interface';

@Component({
  selector: 'curriculum-project-card',
  templateUrl: './project-card.component.html',
  styles: ``
})
export class ProjectCardComponent {

  @Input() project?: GitHubProject;

}
