import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchpageComponent } from './lunchpage.component';

describe('LunchpageComponent', () => {
  let component: LunchpageComponent;
  let fixture: ComponentFixture<LunchpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
