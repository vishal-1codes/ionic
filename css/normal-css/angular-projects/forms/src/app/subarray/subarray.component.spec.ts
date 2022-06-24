import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubarrayComponent } from './subarray.component';

describe('SubarrayComponent', () => {
  let component: SubarrayComponent;
  let fixture: ComponentFixture<SubarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
