import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptInFormComponent } from './opt-in-form.component';

describe('OptInFormComponent', () => {
  let component: OptInFormComponent;
  let fixture: ComponentFixture<OptInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptInFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
