import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notices } from './notices';

describe('Notices', () => {
  let component: Notices;
  let fixture: ComponentFixture<Notices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notices],
    }).compileComponents();

    fixture = TestBed.createComponent(Notices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
