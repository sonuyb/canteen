import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepasterypageComponent } from './singlepasterypage.component';

describe('SinglepasterypageComponent', () => {
  let component: SinglepasterypageComponent;
  let fixture: ComponentFixture<SinglepasterypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepasterypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglepasterypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
