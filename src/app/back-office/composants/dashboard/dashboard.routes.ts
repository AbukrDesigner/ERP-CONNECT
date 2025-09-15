import { Routes } from '@angular/router';
import { MainOffice } from '../../../shared/layouts/main-office/main-office';
import { Dashboard } from './dashboard';

export const DASHBOARD_ROUTES: Routes = [
	{
		path: '',
		component: MainOffice,
        children:[
            {
                path:'',
                component: Dashboard,
                data:{
                    title:'tableau de bord',
                    breadcrumb:[
                        { url:'/dashboard' },
                    ]
                }
            },
            // {
            //     pathMatch:'full',
            //     redirectTo:'',
            // }
        ]
	}
];
