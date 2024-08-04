import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFromEventOperatorComponent } from './creation-from-event-operator.component';

describe('CreationFromEventOperatorComponent', () => {
  let component: CreationFromEventOperatorComponent;
  let fixture: ComponentFixture<CreationFromEventOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationFromEventOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationFromEventOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
