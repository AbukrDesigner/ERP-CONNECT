import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCreat } from './service-creat';

describe('ServiceCreat', () => {
  let component: ServiceCreat;
  let fixture: ComponentFixture<ServiceCreat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCreat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCreat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
