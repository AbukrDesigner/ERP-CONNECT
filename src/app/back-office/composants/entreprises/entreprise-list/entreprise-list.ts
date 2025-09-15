import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entreprise-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './entreprise-list.html',
  styleUrl: './entreprise-list.scss'
})
export class EntrepriseList {
  LockEntreprise() {
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
        Swal.fire(
          'Désactivé !',
          'L\'entreprise a été désactivé.',
          'success'
        );
      }
    });
  }

  UnlockEntreprise() {
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
        Swal.fire(
          'Activé !',
          'L\'entreprise a été activé.',
          'success'
        );
      }
    });
  }
}
