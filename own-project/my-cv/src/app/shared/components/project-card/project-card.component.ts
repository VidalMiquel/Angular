import { Component, Input } from '@angular/core';
import { project } from '../../../curriculum/interfaces/project-interface';

@Component({
  selector: 'shared-project-card',
  templateUrl: './project-card.component.html',
  styles: ``
})
export class ProjectCardComponent {

  @Input() project!: project;

}
