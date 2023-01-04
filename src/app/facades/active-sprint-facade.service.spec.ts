import { TestBed } from '@angular/core/testing';

import { ActiveSprintFacadeService } from './active-sprint-facade.service';

describe('ActiveSprintFacadeService', () => {
  let service: ActiveSprintFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveSprintFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
