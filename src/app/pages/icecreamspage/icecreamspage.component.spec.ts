import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamspageComponent } from './icecreamspage.component';

describe('IcecreamspageComponent', () => {
  let component: IcecreamspageComponent;
  let fixture: ComponentFixture<IcecreamspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcecreamspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcecreamspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
