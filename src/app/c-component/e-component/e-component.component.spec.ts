import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EComponentComponent } from './e-component.component';

describe('EComponentComponent', () => {
  let component: EComponentComponent;
  let fixture: ComponentFixture<EComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
