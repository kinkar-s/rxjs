import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationAjaxOperatorComponent } from './creation-ajax-operator.component';

describe('CreationAjaxOperatorComponent', () => {
  let component: CreationAjaxOperatorComponent;
  let fixture: ComponentFixture<CreationAjaxOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationAjaxOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationAjaxOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
