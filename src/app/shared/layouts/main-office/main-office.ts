import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-main-office',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './main-office.html',
  styleUrl: './main-office.scss'
})
export class MainOffice {

}
