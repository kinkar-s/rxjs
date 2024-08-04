import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationGenerateOperatorComponent } from './creation-generate-operator.component';

describe('CreationGenerateOperatorComponent', () => {
  let component: CreationGenerateOperatorComponent;
  let fixture: ComponentFixture<CreationGenerateOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationGenerateOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationGenerateOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
