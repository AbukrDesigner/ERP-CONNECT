import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterLink ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Form submitted');
      console.log('Username:', this.loginForm.value.username);
      console.log('Password:', this.loginForm.value.password);
      this.router.navigate(['/dashboard']);
    }
  }

  onForgotPassword() {
    // Logique pour mot de passe oublié
  this.router.navigate(['/forget-password']);
  }
}
