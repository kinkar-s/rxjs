import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFromEventPatternOperatorComponent } from './creation-from-event-pattern-operator.component';

describe('CreationFromEventPatternOperatorComponent', () => {
  let component: CreationFromEventPatternOperatorComponent;
  let fixture: ComponentFixture<CreationFromEventPatternOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationFromEventPatternOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationFromEventPatternOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
