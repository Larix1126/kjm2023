import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveSprintTaskListComponent } from './active-sprint-task-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ActiveSprintTaskListComponent],
  imports: [CommonModule, DragDropModule],
  exports: [ActiveSprintTaskListComponent],
})
export class ActiveSprintTaskListModule {}
