import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSprintTaskComponent } from './active-sprint-task.component';

describe('ActiveSprintTaskComponent', () => {
  let component: ActiveSprintTaskComponent;
  let fixture: ComponentFixture<ActiveSprintTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveSprintTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveSprintTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
