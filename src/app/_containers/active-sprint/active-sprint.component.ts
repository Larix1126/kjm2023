import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { TASKS_MOCK } from 'src/app/mocks/active-sprint-mocks.mock';
import { ITask, IUser, TASK_STATUS } from 'src/app/models/active-sprint-base-models.models';
import { ActiveSprintFacadeService } from 'src/app/facades/active-sprint-facade.service';
import { groupBy } from 'lodash';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'kjm-active-sprint',
  templateUrl: './active-sprint.component.html',
  styleUrls: ['./active-sprint.component.scss'],
})
export class ActiveSprintComponent {
  public wall: FormGroup = new FormGroup('');
  public taskStatus: typeof TASK_STATUS = TASK_STATUS;
  public tasks = groupBy(TASKS_MOCK, 'status');
  public projectName: string = 'Keen Job Management';
  public user: any;

  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor(private facade: ActiveSprintFacadeService, public authService: AuthenticationService) {
    // history.state.data ? (this.user = history.state.data) : (this.user = '');
    // console.warn(this.user);
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.facade.changeStatus(event.container);
    }
  }

  public click(): void {
    console.warn('tasks:', this.tasks);
    console.warn(this.authService.decodeJwtToken(sessionStorage.getItem('sessionToken')));
  }
}
