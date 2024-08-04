import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationBindNodeCallbackOperatorComponent } from './creation-bind-node-callback-operator.component';

describe('CreationBindNodeCallbackOperatorComponent', () => {
  let component: CreationBindNodeCallbackOperatorComponent;
  let fixture: ComponentFixture<CreationBindNodeCallbackOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationBindNodeCallbackOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationBindNodeCallbackOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
