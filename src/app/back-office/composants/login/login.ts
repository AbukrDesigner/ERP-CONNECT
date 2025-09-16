import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private router : Router) {}
     email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    console.log('Form submitted');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
    
    // ici tu peux appeler ton service pour authentification
  }

}
