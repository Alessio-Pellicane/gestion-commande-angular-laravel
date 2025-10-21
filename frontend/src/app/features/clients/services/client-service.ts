import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '@shared/models/client.model';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { ApiUris } from '@core/constants';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8000/api';  // Remplacez par l'URL de votre API backend

  private _clients = signal<Client[]>([]);
  public clients$ = this._clients.asReadonly();


  // INPUT: /
  // PROCESS: Récupère la liste des clients depuis l'API backend
  // OUTPUT: Observable contenant la liste des clients
  getClients() : void {
    if(this._clients().length === 0) {
      this.http.get<ApiResponse<Client[]>>(`${this.baseUrl}/${ApiUris.CLIENTS}`).subscribe(
        (response) => {
          console.log('(ClientService - getClients()) Clients récupérés avec succès :', response.data);
          this._clients.set(response.data || []);
        },
        (error) => {
          console.error('(ClientService - getClients()) Erreur lors de la récupération des clients :', error);
        }
      );  // Remplacez 'api/clients' par l'URL réelle de votre API backend
    }
  }
}
