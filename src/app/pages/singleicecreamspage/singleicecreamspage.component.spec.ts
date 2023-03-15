import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleicecreamspageComponent } from './singleicecreamspage.component';

describe('SingleicecreamspageComponent', () => {
  let component: SingleicecreamspageComponent;
  let fixture: ComponentFixture<SingleicecreamspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleicecreamspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleicecreamspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
