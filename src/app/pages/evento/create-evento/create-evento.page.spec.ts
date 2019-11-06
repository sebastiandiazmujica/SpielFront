import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventoPage } from './create-evento.page';

describe('CreateEventoPage', () => {
  let component: CreateEventoPage;
  let fixture: ComponentFixture<CreateEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
