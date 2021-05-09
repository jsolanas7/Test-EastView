import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRegisterEditComponent } from './task-register-edit.component';

describe('TaskRegisterEditComponent', () => {
  let component: TaskRegisterEditComponent;
  let fixture: ComponentFixture<TaskRegisterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRegisterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRegisterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
