import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchviewComponent } from './witchview.component';

describe('WitchviewComponent', () => {
  let component: WitchviewComponent;
  let fixture: ComponentFixture<WitchviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitchviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
