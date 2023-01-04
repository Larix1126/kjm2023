import { Injectable } from '@angular/core';
import { ITask } from '../models/active-sprint-base-models.models';

@Injectable({
  providedIn: 'root',
})
export class ActiveSprintFacadeService {
  public tasks: ITask[];
  constructor() {}

  public changeStatus(context: any): void {
    console.warn(context);
  }
}
