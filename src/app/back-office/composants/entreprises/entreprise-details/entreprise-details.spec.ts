import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseDetails } from './entreprise-details';

describe('EntrepriseDetails', () => {
  let component: EntrepriseDetails;
  let fixture: ComponentFixture<EntrepriseDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrepriseDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepriseDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
