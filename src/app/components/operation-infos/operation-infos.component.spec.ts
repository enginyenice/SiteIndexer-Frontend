import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationInfosComponent } from './operation-infos.component';

describe('OperationInfosComponent', () => {
  let component: OperationInfosComponent;
  let fixture: ComponentFixture<OperationInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
