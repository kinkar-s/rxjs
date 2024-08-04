import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationIifOperatorComponent } from './creation-iif-operator.component';

describe('CreationIifOperatorComponent', () => {
  let component: CreationIifOperatorComponent;
  let fixture: ComponentFixture<CreationIifOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationIifOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationIifOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
