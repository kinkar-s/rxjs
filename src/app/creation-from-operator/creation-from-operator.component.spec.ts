import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFromOperatorComponent } from './creation-from-operator.component';

describe('CreationFromOperatorComponent', () => {
  let component: CreationFromOperatorComponent;
  let fixture: ComponentFixture<CreationFromOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationFromOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationFromOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
