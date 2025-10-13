import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  imports: [RouterLink, DatePipe],
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class Clients {
    clients = [
      {
        id: 1,
        nom: 'Dupont',
        prenom: 'Jean',
        date_de_naissance: new Date(1985, 4, 12),
        telephone: '0601020304',
        email: 'jean.dupont@email.com'
      },
      {
        id: 2,
        nom: 'Martin',
        prenom: 'Sophie',
        date_de_naissance: new Date(1990, 10, 23),
        telephone: '0605060708',
        email: 'sophie.martin@email.com'
      },
      {
        id: 3,
        nom: 'Durand',
        prenom: 'Paul',
        date_de_naissance: new Date(1978, 1, 5),
        telephone: '0611223344',
        email: 'paul.durand@email.com'
      }
    ];
}
