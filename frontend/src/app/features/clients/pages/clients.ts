import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TITLE } from '@core/constants';
import { PageTitleService } from '@shared/services/page-title-service';
import { Client } from '@shared/models/client.model';
import { ClientService } from '../services/client-service';
import { ApiResponse } from '@core/interfaces/api-response.interface';



@Component({
  selector: 'app-clients',
  imports: [RouterLink, DatePipe],
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class Clients implements OnInit {

  private pageTitleService = inject(PageTitleService);
  protected clientService = inject(ClientService);





  // INPUT: / 
  // PROCESS: Initialisation du composant
  // OUTPUT: /
  ngOnInit(): void {
    console.log('(Clients - ngOnInit) Initialisation du composant...');
    this.pageTitleService.setPageTitle(TITLE.CLIENTS);
  }
}
