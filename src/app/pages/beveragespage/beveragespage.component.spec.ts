import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragespageComponent } from './beveragespage.component';

describe('BeveragespageComponent', () => {
  let component: BeveragespageComponent;
  let fixture: ComponentFixture<BeveragespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeveragespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeveragespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
