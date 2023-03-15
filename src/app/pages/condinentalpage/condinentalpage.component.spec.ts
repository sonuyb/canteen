import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondinentalpageComponent } from './condinentalpage.component';

describe('CondinentalpageComponent', () => {
  let component: CondinentalpageComponent;
  let fixture: ComponentFixture<CondinentalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondinentalpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondinentalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
