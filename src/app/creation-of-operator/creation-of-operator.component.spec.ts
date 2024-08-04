import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOfOperatorComponent } from './creation-of-operator.component';

describe('CreationOfOperatorComponent', () => {
  let component: CreationOfOperatorComponent;
  let fixture: ComponentFixture<CreationOfOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationOfOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationOfOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
