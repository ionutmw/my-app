import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextstepsComponent } from './nextsteps.component';

describe('NextstepsComponent', () => {
  let component: NextstepsComponent;
  let fixture: ComponentFixture<NextstepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextstepsComponent]
    });
    fixture = TestBed.createComponent(NextstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
