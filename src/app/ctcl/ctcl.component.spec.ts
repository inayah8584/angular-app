import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtclComponent } from './ctcl.component';

describe('CtclComponent', () => {
  let component: CtclComponent;
  let fixture: ComponentFixture<CtclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
