import { Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@shared/components/header/header';
import { ClientService } from '@features/clients/services/client-service';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  private clientService = inject(ClientService);


  ngOnInit(): void {
    console.log('(App - ngOnInit) Initialisation du composant racine...');
    this.clientService.getClients();
  }
}
