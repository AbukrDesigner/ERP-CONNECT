import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path:'dashboard',
        loadChildren:() => import('./back-office/composants/dashboard/dashboard.routes').then(
            m => m.DASHBOARD_ROUTES
        )
    },
    {
        path:'entreprises',
        loadChildren:() => import('./back-office/composants/entreprises/entreprises.routes').then(
            m => m.ENTREPRISES_ROUTES
        )
    },
    {
        path:'services',
        loadChildren:() => import('./back-office/composants/services/services.routes').then(
            m => m.SERVICES_ROUTES
        )
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];
