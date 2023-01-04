import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/models/active-sprint-base-models.models';

@Component({
  selector: 'kjm-active-sprint-task',
  templateUrl: './active-sprint-task.component.html',
  styleUrls: ['./active-sprint-task.component.scss'],
})
export class ActiveSprintTaskComponent {
  @Input() public item: ITask;
}
