import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [],
  templateUrl: './service-list.html',
  styleUrl: './service-list.scss'
})
export class ServiceList {
constructor(private router: Router) {}
LockService() {
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
      Swal.fire(
        'Désactivé !',
        'Le service a été désactivé.',
        'success'
      );
    }
  });
}
UnloService() {
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
      Swal.fire(
        'Activé !',
        'Le service a été activé.',
        'success'
      );
    }
  });
};
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
}
