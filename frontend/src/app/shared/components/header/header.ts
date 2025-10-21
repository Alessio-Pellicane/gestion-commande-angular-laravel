import { OnInit, Component , inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { PageTitleService } from '@shared/services/page-title-service';
import { DateTimeService } from '@shared/services/date-time-service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit  {

  protected pageTilteService = inject(PageTitleService);
  protected currentDate$! : Observable<Date>;
  protected dateTimeService = inject(DateTimeService);
  

  // INPUT: / 
  // PROCESS: Initialision d'un Observable qui émet la date actuelle toutes les secondes
  // OUTPUT: /
  ngOnInit(): void {
    console.log("(Header - ngOnInit) : Initialisation du composant...");
    
  }

}
