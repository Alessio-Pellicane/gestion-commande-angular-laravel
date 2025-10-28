import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TITLE } from '@core/constants';
import { PageTitleService } from '@shared/services/page-title-service';
import { Client } from '@shared/models/client.model';
import { ClientService } from '../services/client-service';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddClientDialogComponent } from '../components/add-client-dialog-component/add-client-dialog-component';


@Component({
  selector: 'app-clients',
  imports: [RouterLink, DatePipe],
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class Clients implements OnInit {

  private pageTitleService = inject(PageTitleService);
  private dialog = inject(MatDialog);
  protected clientService = inject(ClientService);
  





  // INPUT: / 
  // PROCESS: Initialisation du composant
  // OUTPUT: /
  ngOnInit(): void {
    console.log('(Clients - ngOnInit) Initialisation du composant...');
    this.pageTitleService.setPageTitle(TITLE.CLIENTS);
  }







  // INPUT: /
  // PROCESS: Ouvre la boîte de dialogue pour ajouter un nouveau client
  // OUTPUT: /
   openAddClientDialog() {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      width: '400px',
      data: {} // optionnel : données initiales pour pré-remplir le formulaire
    });

    dialogRef.afterClosed().subscribe((result: Client | undefined) => {
      if (result) {
        // L'utilisateur a rempli le formulaire et validé
       console.log('(Clients - openAddClientDialog) Nouveau client ajouté :', result);
        
      }
      // si result est undefined => l'utilisateur a annulé
    });
  }
}
