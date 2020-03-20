import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeodorantComponent } from './deodorant.component';

describe('DeodorantComponent', () => {
  let component: DeodorantComponent;
  let fixture: ComponentFixture<DeodorantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeodorantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeodorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
