import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignments } from './assignments';

describe('Assignments', () => {
  let component: Assignments;
  let fixture: ComponentFixture<Assignments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignments],
    }).compileComponents();

    fixture = TestBed.createComponent(Assignments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
