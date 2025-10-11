import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Clients } from './features/clients/clients';
import { Produits } from './features/produits/produits';
import { Commandes } from './features/commandes/commandes';

export const routes: Routes = [
    {path: '', component: Dashboard},
    {path: 'clients', component: Clients},
    {path: 'produits', component: Produits},
    {path: 'commandes', component: Commandes},
    {path: '**', redirectTo: ''} // Wildcard route for a 404 page

];
