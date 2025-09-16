import { Routes } from '@angular/router';
import { Login } from './back-office/composants/login/login';
import { ForgetPassword } from './back-office/composants/forget-password/forget-password';
import { ResetPassword } from './back-office/composants/reset-password/reset-password';

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
        path:'login',
        component: Login,
        data:{
            title:'Se connecter',
        }
    },
    {
        path:'forget-password',
        component: ForgetPassword,
        data:{
            title:'Mot de passe oublié',
        }
    },
    {
        path:'reset-password',
        component: ResetPassword,
        data:{
            title:'Réinitialiser le mot de passe',
        }
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];
