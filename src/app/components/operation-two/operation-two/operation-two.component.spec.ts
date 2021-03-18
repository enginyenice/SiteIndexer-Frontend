import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationTwoComponent } from './operation-two.component';

describe('OperationTwoComponent', () => {
  let component: OperationTwoComponent;
  let fixture: ComponentFixture<OperationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
