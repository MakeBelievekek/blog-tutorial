import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxSpinnerComponent } from './fox-spinner.component';

describe('FoxSpinnerComponent', () => {
  let component: FoxSpinnerComponent;
  let fixture: ComponentFixture<FoxSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoxSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
