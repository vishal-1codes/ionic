import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwongforComponent } from './twongfor.component';

describe('TwongforComponent', () => {
  let component: TwongforComponent;
  let fixture: ComponentFixture<TwongforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwongforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwongforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
