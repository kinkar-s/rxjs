import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTimerOperatorComponent } from './creation-timer-operator.component';

describe('CreationTimerOperatorComponent', () => {
  let component: CreationTimerOperatorComponent;
  let fixture: ComponentFixture<CreationTimerOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationTimerOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationTimerOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
