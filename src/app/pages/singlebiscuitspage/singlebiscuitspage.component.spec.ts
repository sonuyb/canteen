import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebiscuitspageComponent } from './singlebiscuitspage.component';

describe('SinglebiscuitspageComponent', () => {
  let component: SinglebiscuitspageComponent;
  let fixture: ComponentFixture<SinglebiscuitspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglebiscuitspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglebiscuitspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
