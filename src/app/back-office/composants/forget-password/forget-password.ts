import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss'
})
export class ForgetPassword {
  forgetPasswordForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSendResetLink() {
    if (this.forgetPasswordForm.valid) {
  
      Swal.fire({
        icon:'success',
        text:'Votre mot de passe a été modifié avec succès.',
        title:'Modification de mot de passe'
      })
      this.router.navigate(['/login']);
    }
  }
onBackToLogin() {
  this.router.navigate(['/login']);
}
}
