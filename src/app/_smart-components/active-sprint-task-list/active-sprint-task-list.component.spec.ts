import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSprintTaskListComponent } from './active-sprint-task-list.component';

describe('ActiveSprintTaskListComponent', () => {
  let component: ActiveSprintTaskListComponent;
  let fixture: ComponentFixture<ActiveSprintTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveSprintTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveSprintTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
