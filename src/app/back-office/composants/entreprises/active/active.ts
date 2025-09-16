import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-active',
  imports: [RouterLink],
  templateUrl: './active.html',
  styleUrl: './active.scss'
})
export class Active {
constructor() {}
  dislock(){
   Swal.fire({
     title: 'Désactivation',
     text: 'Vous allez désactiver cette entreprise.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2C2D5B',
      cancelButtonColor: '#F67366',
      confirmButtonText: 'Oui, désactiver',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Désactivée !',
          'L\'entreprise a été désactivée avec succès.',
          'success'
        )
      }
    });
  }
}
