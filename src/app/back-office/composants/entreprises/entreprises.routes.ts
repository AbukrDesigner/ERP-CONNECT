import { Routes} from "@angular/router";
import { MainOffice } from "../../../shared/layouts/main-office/main-office";
import { EntrepriseList } from "./entreprise-list/entreprise-list";
import { EntrepriseDetails } from "./entreprise-details/entreprise-details";
import { Enrolement } from "./enrolement/enrolement";
import { Inactive } from "./inactive/inactive";
import { Active } from "./active/active";
import { EntrepriseCreate } from "./entreprise-create/entreprise-create";

export const ENTREPRISES_ROUTES :Routes=[
    {
        path:'',
        component: MainOffice,
        children:[
            {
                path:'',
                component: EntrepriseList,
                data:{
                    title:'Liste des entreprises',
                    breadcrumb:[
                        { url:'/entreprises' },
                    ]
                },
            },
            {
                path:'entreprise-details',
                component: EntrepriseDetails,
                data:{
                    title:'Détails de l\'entreprise',
                    breadcrumb:[
                        { url:'/entreprises/entreprise-details' },
                    ]
                },
            },
            {
                path:'inactives',
                component: Inactive,
                data:{
                    title:'Entreprises inactives',
                    breadcrumb: [
                        { url:'/entreprises/inactives' },
                    ]
                }
            },
            {
                path:'actives',
                component:Active,
                data:{
                    title:'Entreprises actives',
                    breadcrumb:[
                        { url:'/entreprises/actives' },
                    ]
                }
            },
            {
                path:'enrolement',
                component: Enrolement,
                data:{
                    title:'Enrolement',
                    breadcrumb:[
                        { url:'/entreprises/enrolement' },
                    ]
                },
            },
            {
                path:'create',
                component: EntrepriseCreate,
                data:{
                    title:'Création d\'entreprise',
                    breadcrumb:[
                        { url:'/entreprises/entreprise-create' },
                    ]
                },
            }
            // {
            //     pathMatch:'full',
            //     redirectTo:'',
            // }
        ]
    }
]