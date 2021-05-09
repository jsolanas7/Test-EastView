import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenRegisterEditComponent } from './citizen-register-edit.component';

describe('CitizenRegisterEditComponent', () => {
  let component: CitizenRegisterEditComponent;
  let fixture: ComponentFixture<CitizenRegisterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenRegisterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenRegisterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
