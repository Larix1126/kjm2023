import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveSprintComponent } from './active-sprint.component';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { ActiveSprintTaskModule } from 'src/app/_smart-components/active-sprint-task/active-sprint-task.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ActiveSprintComponent,
  },
];

@NgModule({
  declarations: [ActiveSprintComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    MatButtonModule,
    ActiveSprintTaskModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ActiveSprintComponent],
})
export class ActiveSprintModule {}
