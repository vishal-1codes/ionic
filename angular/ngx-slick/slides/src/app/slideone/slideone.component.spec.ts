import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideoneComponent } from './slideone.component';

describe('SlideoneComponent', () => {
  let component: SlideoneComponent;
  let fixture: ComponentFixture<SlideoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
