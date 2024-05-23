/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkflowTypeService } from './workflow-type.service';

describe('Service: WorkflowType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowTypeService]
    });
  });

  it('should ...', inject([WorkflowTypeService], (service: WorkflowTypeService) => {
    expect(service).toBeTruthy();
  }));
});
