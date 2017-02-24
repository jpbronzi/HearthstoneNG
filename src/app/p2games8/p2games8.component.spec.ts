/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P2games8Component } from './p2games8.component';

describe('P2games8Component', () => {
  let component: P2games8Component;
  let fixture: ComponentFixture<P2games8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2games8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2games8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
