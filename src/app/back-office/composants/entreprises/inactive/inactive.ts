import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inactive',
  imports: [RouterLink],
  templateUrl: './inactive.html',
  styleUrl: './inactive.scss'
})
export class Inactive {
constructor(private router: Router) {}
  unlockEntreprise(){
    Swal.fire({
      title: 'Activation',
      text: 'Vous allez activer cette entreprise.', 
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2C2D5B',
      cancelButtonColor: '#F67366',
      confirmButtonText: 'Oui, activer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Activée !',
          'L\'entreprise a été activée avec succès.',
          'success'
        )
      }
    });
  }
}
