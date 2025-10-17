import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
    {
        path: '',
        title: 'Page Dashboard',
        loadComponent: () => import('./pages/dashboard').then(m => m.Dashboard),
    },
    {
        path: '**',
        title: 'Page introuvable',
        redirectTo: '',
    }
];