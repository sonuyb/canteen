import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecondinentalpageComponent } from './singlecondinentalpage.component';

describe('SinglecondinentalpageComponent', () => {
  let component: SinglecondinentalpageComponent;
  let fixture: ComponentFixture<SinglecondinentalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglecondinentalpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglecondinentalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
