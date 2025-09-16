import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrolement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrolement.html',
  styleUrl: './enrolement.scss'
})
export class Enrolement {
  ninea: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  // Liste des NINEA valides (simulation d'une base de données)
  validNineas = [
    '123456789',
    '987654321',
    '456789123',
    '789123456',
    '321654987'
  ];

  onNineaChange() {
    // Réinitialiser le message d'erreur quand l'utilisateur tape
    this.errorMessage = '';
  }

  onSearch() {
    if (!this.ninea.trim()) {
      this.errorMessage = 'Veuillez saisir un NINEA';
      return;
    }

    this.isLoading = true;
    
    // Simuler une vérification asynchrone
    setTimeout(() => {
      this.isLoading = false;
      
      if (this.validNineas.includes(this.ninea.trim())) {
        // NINEA trouvé - succès
        this.errorMessage = '';
        console.log('NINEA trouvé:', this.ninea);
        // Ici vous pouvez naviguer vers la page suivante ou afficher les informations
      } else {
        // NINEA non trouvé - erreur
        this.errorMessage = `Le NINEA "${this.ninea}" est pas trouvable dans le système`;
      }
    }, 1000);
  }
}
