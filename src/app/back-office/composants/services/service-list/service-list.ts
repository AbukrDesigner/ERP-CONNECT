import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import Swal from 'sweetalert2';
export interface ServiceItem {
  id: number;
  libelle: string;
  secteurs: string[];
  typeTransit: string[];
  description: string;
  actif: boolean;
}
@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './service-list.html',
  styleUrl: './service-list.scss'
})
export class ServiceList implements OnInit {
constructor(private router: Router) {}
services: ServiceItem[] = [
  {
    id: 1,
    libelle: 'Livraison Express',
    secteurs: ['Transitaire', 'Transport'],
    typeTransit: ['Import'],
    description: 'Service de livraison en 24h maximum',
    actif: false
  },
  {
    id: 2,
    libelle: 'Fret Maritime',
    secteurs: ['Transport'],
    typeTransit: ['Export'],
    description: 'Acheminement par voie maritime',
    actif: true
  },
  {
    id: 3,
    libelle: 'Consignation Portuaire',
    secteurs: ['Consignation'],
    typeTransit: ['Import'],
    description: 'Stockage sécurisé pour marchandises en transit',
    actif: true
  },
  {
    id: 4,
    libelle: 'Assistance Douanière',
    secteurs: ['Transitaire'],
    typeTransit: ['Transit'],
    description: 'Aide à la préparation des documents douaniers',
    actif: true
  },
  {
    id: 5,
    libelle: 'Transport Multimodal',
    secteurs: ['Transitaire', 'Transport'],
    typeTransit: ['Import', 'Export'],
    description: 'Faciliter vos import & export inter-continental',
    actif: false
  }
];
LockService(service: ServiceItem) {
  Swal.fire({
    title: 'Êtes-vous sûr ?',
    text: "Vous allez désactiver ce service.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2C2D5B',
    cancelButtonAriaLabel: 'Annuler',
    cancelButtonColor: '#F67366',
    confirmButtonText: 'Oui, désactiver !',
    // cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      service.actif = false;
      Swal.fire(
        'Désactivé !',
        'Le service a été désactivé.',
        'success'
      );
    }
  });
}
UnloService(service: ServiceItem) {
  Swal.fire({
    title: 'Êtes-vous sûr ?',
    text: "Vous allez activer ce service.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2C2D5B',
    cancelButtonAriaLabel: 'Annuler',
    cancelButtonColor: '#F67366',
    confirmButtonText: 'Oui, activer !',
    // cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      service.actif = true;
      Swal.fire(
        'Activé !',
        'Le service a été activé.',
        'success'
      );
    }
  });
}
ServiceCreated(){
  Swal.fire({
    title:'Création réussit',
    text:'Le Services a été crée avec succès.',
    icon:'success',
    showCancelButton:false,
    showConfirmButton: false,
    timer:3000
  })
}

ngOnInit(): void {
  const url = new URL(window.location.href);
  const open = url.searchParams.get('open');
  if (open === 'create') {
    const createButton = document.querySelector('[data-bs-target="#createService"]') as HTMLElement | null;
    if (createButton) {
      createButton.click();
    }
  }
}
}
