import { Routes } from "@angular/router";
import { MainOffice } from "../../../shared/layouts/main-office/main-office";
import { ServiceList } from "./service-list/service-list";
import { ServiceEdit } from "./service-edit/service-edit";
import { ServiceCreat } from "./service-creat/service-creat";

export const SERVICES_ROUTES : Routes =[
    {
        path:'',
        component: MainOffice,
        children:[
            {
                path:'',
                component: ServiceList,
                data:{
                    title:'Liste des services',
                    breadcrumb:[
                        { url:'/services' },
                    ]
                },
            },
            {
                path:'service-edit',
                component: ServiceEdit,
                data:{
                    title:'Modifier le service',
                    breadcrumb:[
                        { url:'/services/service-edit' },
                    ]
                },
            },
            {
                path:'service-create',
                component: ServiceCreat,
                data:{
                    title:'Créer un service',
                    breadcrumb:[
                        { url:'/services/service-create' },
                    ]
                },
            },
            // {
            //     pathMatch:'full',
            //     redirectTo:'',
            // },
        ]    
    }
]