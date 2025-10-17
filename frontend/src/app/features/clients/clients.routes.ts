import { Routes } from '@angular/router';

export const clientsRoutes : Routes = [
    {
        path: '', 
        title: 'Page Clients',
        loadComponent: () => import('./pages/clients').then(m => m.Clients),
    },
    {
        path: '**',
        title: 'Page introuvable',
        redirectTo: '',
    }
];