import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements AfterViewInit {
  constructor (private routes: Router) {}
  @ViewChild('MyChart') myChart!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    new Chart(this.myChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Consignation: 29%', 'Transport: 54%', 'Transitaire: 18%'],
        datasets: [{
          data: [29, 54, 18],
          backgroundColor: ['#F3F3F3', '#11B981', '#F67366'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '50%',
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              usePointStyle: true,
              pointStyle: 'rectRounded',
              padding: 20,
              font: { size: 13, family: 'Poppins, Arial, sans-serif', weight: 'normal' },
              color: '#425166',
              boxWidth: 20,
              boxHeight: 16,
              textAlign: 'left'
            }
          }
        },
        layout: {
          padding: 10
        }
      }
    });
  }
  navigateToServices() {
    this.routes.navigate(['services']);
  }
  navigateToEntreprisesActives() {
    this.routes.navigate(['/entreprises/actives']);
  }
  navigateToEntreprisesInactives() {
    this.routes.navigate(['/entreprises/inactives']);
  }
}
