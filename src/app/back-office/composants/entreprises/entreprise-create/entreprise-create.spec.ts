import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseCreate } from './entreprise-create';

describe('EntrepriseCreate', () => {
  let component: EntrepriseCreate;
  let fixture: ComponentFixture<EntrepriseCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrepriseCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepriseCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
