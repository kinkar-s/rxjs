import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationThrowErrorOperatorComponent } from './creation-throw-error-operator.component';

describe('CreationThrowErrorOperatorComponent', () => {
  let component: CreationThrowErrorOperatorComponent;
  let fixture: ComponentFixture<CreationThrowErrorOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationThrowErrorOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationThrowErrorOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
