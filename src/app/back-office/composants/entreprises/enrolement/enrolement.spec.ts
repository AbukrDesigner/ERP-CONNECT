import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enrolement } from './enrolement';

describe('Enrolement', () => {
  let component: Enrolement;
  let fixture: ComponentFixture<Enrolement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enrolement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enrolement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
