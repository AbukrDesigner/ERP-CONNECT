import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOffice } from './main-office';

describe('MainOffice', () => {
  let component: MainOffice;
  let fixture: ComponentFixture<MainOffice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainOffice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainOffice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
