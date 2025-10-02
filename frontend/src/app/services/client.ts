import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = "http://localhost:8000/clients";
  private httpClient = inject(HttpClient);

  
  getClients(): Observable<any>{
    return this.httpClient.get(this.apiUrl);
  }
}
