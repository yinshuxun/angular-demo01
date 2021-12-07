/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error2Component } from './error2.component';

describe('Error2Component', () => {
  let component: Error2Component;
  let fixture: ComponentFixture<Error2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
