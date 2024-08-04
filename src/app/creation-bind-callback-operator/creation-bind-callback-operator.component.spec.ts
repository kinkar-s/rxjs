import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationBindCallbackOperatorComponent } from './creation-bind-callback-operator.component';

describe('CreationBindCallbackOperatorComponent', () => {
  let component: CreationBindCallbackOperatorComponent;
  let fixture: ComponentFixture<CreationBindCallbackOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationBindCallbackOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationBindCallbackOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
