import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasterypageComponent } from './pasterypage.component';

describe('PasterypageComponent', () => {
  let component: PasterypageComponent;
  let fixture: ComponentFixture<PasterypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasterypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasterypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
