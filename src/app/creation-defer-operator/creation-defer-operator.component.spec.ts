import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDeferOperatorComponent } from './creation-defer-operator.component';

describe('CreationDeferOperatorComponent', () => {
  let component: CreationDeferOperatorComponent;
  let fixture: ComponentFixture<CreationDeferOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationDeferOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationDeferOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
