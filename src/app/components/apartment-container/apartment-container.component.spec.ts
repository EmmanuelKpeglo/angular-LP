import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentContainerComponent } from './apartment-container.component';

describe('ApartmentContainerComponent', () => {
  let component: ApartmentContainerComponent;
  let fixture: ComponentFixture<ApartmentContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentContainerComponent]
    });
    fixture = TestBed.createComponent(ApartmentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
