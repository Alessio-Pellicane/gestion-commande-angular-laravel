import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TITLE } from '@core/constants';
import { PageTitleService } from '@shared/services/page-title-service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit{

  private pageTitleService = inject(PageTitleService);
  private route = inject(Router);

  ngOnInit(): void {
    console.log('(Dashboard - ngOnInit) Initialisation du composant...');
    this.pageTitleService.setPageTitle(TITLE.DASHBOARD);
  }



  onCardClick(path : string ): void {
    console.log('(Dashboard - onClientsCardClick) : Clic sur la carte Clients');
    this.route.navigate(['/' + path]);
  }
  
}
