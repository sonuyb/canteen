import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscuitspageComponent } from './biscuitspage.component';

describe('BiscuitspageComponent', () => {
  let component: BiscuitspageComponent;
  let fixture: ComponentFixture<BiscuitspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiscuitspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiscuitspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
