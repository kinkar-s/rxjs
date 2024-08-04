import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationIntervalOperatorComponent } from './creation-interval-operator.component';

describe('CreationIntervalOperatorComponent', () => {
  let component: CreationIntervalOperatorComponent;
  let fixture: ComponentFixture<CreationIntervalOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationIntervalOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationIntervalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
