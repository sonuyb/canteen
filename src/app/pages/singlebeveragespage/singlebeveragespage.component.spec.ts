import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebeveragespageComponent } from './singlebeveragespage.component';

describe('SinglebeveragespageComponent', () => {
  let component: SinglebeveragespageComponent;
  let fixture: ComponentFixture<SinglebeveragespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglebeveragespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglebeveragespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
