import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesnackpageComponent } from './singlesnackpage.component';

describe('SinglesnackpageComponent', () => {
  let component: SinglesnackpageComponent;
  let fixture: ComponentFixture<SinglesnackpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglesnackpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglesnackpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
