import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-create',
  standalone: true,
  imports: [MatStepperModule, CommonModule, MatIconModule,MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './entreprise-create.html',
  styleUrl: './entreprise-create.scss'
})
export class EntrepriseCreate {
  selectedFile: File | null = null;
  fileName: string = '';

  // Services par secteur
  servicesTransitaire = [
    'Dédouanement Express',
    'Livraison 24h',
    'Assurance marchandises'
  ];

  servicesConsignation = [
    'Sécurisation des marchandises',
    'Dédouanement Express',
    'Livraison 24h',
    'Assurance marchandises'
  ];

  // États des checkboxes
  selectedServicesTransitaire: string[] = [];
  selectedServicesConsignation: string[] = [];

  constructor(private router: Router){}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.fileName = file.name;
      console.log('Fichier sélectionné:', file.name);
    }
  }

  onUploadAreaClick() {
    const fileInput = document.getElementById('logo') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  // Fonction pour cocher/décocher tous les services d'un secteur
  toggleAllServices(secteur: string) {
    if (secteur === 'transitaire') {
      if (this.selectedServicesTransitaire.length === this.servicesTransitaire.length) {
        // Si tous sont cochés, tout décocher
        this.selectedServicesTransitaire = [];
      } else {
        // Sinon, tout cocher
        this.selectedServicesTransitaire = [...this.servicesTransitaire];
      }
    } else if (secteur === 'consignation') {
      if (this.selectedServicesConsignation.length === this.servicesConsignation.length) {
        // Si tous sont cochés, tout décocher
        this.selectedServicesConsignation = [];
      } else {
        // Sinon, tout cocher
        this.selectedServicesConsignation = [...this.servicesConsignation];
      }
    }
  }

  // Fonction pour gérer la sélection d'un service individuel
  onServiceChange(service: string, secteur: string, event: any) {
    if (secteur === 'transitaire') {
      if (event.target.checked) {
        if (!this.selectedServicesTransitaire.includes(service)) {
          this.selectedServicesTransitaire.push(service);
        }
      } else {
        this.selectedServicesTransitaire = this.selectedServicesTransitaire.filter(s => s !== service);
      }
    } else if (secteur === 'consignation') {
      if (event.target.checked) {
        if (!this.selectedServicesConsignation.includes(service)) {
          this.selectedServicesConsignation.push(service);
        }
      } else {
        this.selectedServicesConsignation = this.selectedServicesConsignation.filter(s => s !== service);
      }
    }
  }

  // Fonction pour vérifier si un service est sélectionné
  isServiceSelected(service: string, secteur: string): boolean {
    if (secteur === 'transitaire') {
      return this.selectedServicesTransitaire.includes(service);
    } else if (secteur === 'consignation') {
      return this.selectedServicesConsignation.includes(service);
    }
    return false;
  }

  // Fonction pour vérifier si tous les services d'un secteur sont cochés
  areAllServicesSelected(secteur: string): boolean {
    if (secteur === 'transitaire') {
      return this.selectedServicesTransitaire.length === this.servicesTransitaire.length;
    } else if (secteur === 'consignation') {
      return this.selectedServicesConsignation.length === this.servicesConsignation.length;
    }
    return false;
  }
}




 

 

 
