import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entreprise-list',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './entreprise-list.html',
  styleUrl: './entreprise-list.scss'
})
export class EntrepriseList {
  entreprises: Array<{
    raisonSociale: string;
    contact: string;
    telephone: string;
    secteurs: string[];
    actif: boolean;
  }> = [
    {
      raisonSociale: 'Fall-Transit',
      contact: 'fall@gmail.com',
      telephone: '33 000 00 00',
      secteurs: ['Transitaire'],
      actif: true
    },
    {
      raisonSociale: 'Fall-Transit',
      contact: 'fall@gmail.com',
      telephone: '33 000 00 00',
      secteurs: ['Transitaire', 'Consignation'],
      actif: true
    },
    {
      raisonSociale: 'TRANSSEN LOGISTICS',
      contact: 'trans@gmail.com',
      telephone: '33 000 00 00',
      secteurs: ['Transport'],
      actif: true
    },
    {
      raisonSociale: 'Ets. Diouf & Fils',
      contact: 'diouf&fils@gmail.com',
      telephone: '33 000 00 00',
      secteurs: ['Consignation'],
      actif: false
    }
  ];

  LockEntreprise(e: { actif: boolean }) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Vous allez désactiver cette entreprise.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2C2D5B',
      cancelButtonAriaLabel: 'Annuler',
      cancelButtonColor: '#F67366',
      confirmButtonText: 'Oui, désactiver !',
    }).then((result) => {
      if (result.isConfirmed) {
        e.actif = false;
        Swal.fire(
          'Désactivé !',
          'L\'entreprise a été désactivé.',
          'success'
        );
      }
    });
  }

  UnlockEntreprise(e: { actif: boolean }) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Vous allez activer cette entreprise.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2C2D5B',
      cancelButtonAriaLabel: 'Annuler',
      cancelButtonColor: '#F67366',
      confirmButtonText: 'Oui, activer !',
    }).then((result) => {
      if (result.isConfirmed) {
        e.actif = true;
        Swal.fire(
          'Activé !',
          'L\'entreprise a été activé.',
          'success'
        );
      }
    });
  }
}
