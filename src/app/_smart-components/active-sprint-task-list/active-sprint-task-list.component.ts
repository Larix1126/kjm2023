import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DONE_LIST_MOCK, TODO_LIST_MOCK } from 'src/app/mocks/active-sprint-mocks.mock';
@Component({
  selector: 'kjm-active-sprint-task-list',
  templateUrl: './active-sprint-task-list.component.html',
  styleUrls: ['./active-sprint-task-list.component.scss'],
})
export class ActiveSprintTaskListComponent {
  @Input() public todo: Array<string>;
  @Input() public done: Array<string>;

  @Input() public connections

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
