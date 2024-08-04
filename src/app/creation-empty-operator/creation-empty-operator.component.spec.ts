import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationEmptyOperatorComponent } from './creation-empty-operator.component';

describe('CreationEmptyOperatorComponent', () => {
  let component: CreationEmptyOperatorComponent;
  let fixture: ComponentFixture<CreationEmptyOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationEmptyOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationEmptyOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
