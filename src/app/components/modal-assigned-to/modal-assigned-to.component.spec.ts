import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssignedToComponent } from './modal-assigned-to.component';

describe('ModalAssignedToComponent', () => {
  let component: ModalAssignedToComponent;
  let fixture: ComponentFixture<ModalAssignedToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAssignedToComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAssignedToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
