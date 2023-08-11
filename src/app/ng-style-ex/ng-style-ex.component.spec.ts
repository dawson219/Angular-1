import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleExComponent } from './ng-style-ex.component';

describe('NgStyleExComponent', () => {
  let component: NgStyleExComponent;
  let fixture: ComponentFixture<NgStyleExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgStyleExComponent]
    });
    fixture = TestBed.createComponent(NgStyleExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
