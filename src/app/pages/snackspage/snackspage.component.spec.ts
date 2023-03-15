import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackspageComponent } from './snackspage.component';

describe('SnackspageComponent', () => {
  let component: SnackspageComponent;
  let fixture: ComponentFixture<SnackspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
