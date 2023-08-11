import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAttributeClassComponent } from './ng-attribute-class.component';

describe('NgAttributeClassComponent', () => {
  let component: NgAttributeClassComponent;
  let fixture: ComponentFixture<NgAttributeClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgAttributeClassComponent]
    });
    fixture = TestBed.createComponent(NgAttributeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
