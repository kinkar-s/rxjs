import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationRangeOperatorComponent } from './creation-range-operator.component';

describe('CreationRangeOperatorComponent', () => {
  let component: CreationRangeOperatorComponent;
  let fixture: ComponentFixture<CreationRangeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationRangeOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationRangeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
