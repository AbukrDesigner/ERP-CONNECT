import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
constructor(private router :Router) {}
  disconnect(){
    Swal.fire({
      title: 'Déconnexion',
      text: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2C2D5B',
      cancelButtonColor: '#F67366',
      confirmButtonText: 'Oui, déconnecter',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // localStorage.removeItem('token');
        this.router.navigate(['/login']);
        Swal.fire(
          'Déconnecté !',
          'Vous avez été déconnecté avec succès.',
          'success', 
        )
      }
    });
}
}
