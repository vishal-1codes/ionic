import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxslickComponent } from './ngxslick.component';

describe('NgxslickComponent', () => {
  let component: NgxslickComponent;
  let fixture: ComponentFixture<NgxslickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxslickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxslickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
