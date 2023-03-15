import { ComponentFixture, TestBed } from '@angular/core/testing';

import { menupageComponent } from './menupage.component';

describe('MenupageComponent', () => {
  let component: menupageComponent;
  let fixture: ComponentFixture<menupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ menupageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(menupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
