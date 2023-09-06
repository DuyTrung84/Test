import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1Component } from './Demo1Component';

describe('Demo1Component', () => {
  let component: Demo1Component;
  let fixture: ComponentFixture<Demo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo1Component]
    });
    fixture = TestBed.createComponent(Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
