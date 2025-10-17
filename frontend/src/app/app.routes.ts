import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard';
import { Produits } from '@features/produits/produits';
import { Commandes } from '@features/commandes/commandes';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },

    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.dashboardRoutes),

    },
    {
        path: 'clients',
        loadChildren: () => import('./features/clients/clients.routes').then(m => m.clientsRoutes),
    },

    {
        path: 'produits',
        component: Produits
    },
    {
        path: 'commandes',
        component:
            Commandes
    },
    {
        path: '**',
        redirectTo: ''
    }

];
