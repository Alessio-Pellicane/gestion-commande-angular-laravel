import { OnInit, OnDestroy, Component, Input } from '@angular/core';
import { DatePipe, AsyncPipe } from '@angular/common';
import { interval, Observable, Subject } from 'rxjs';
import { map, takeUntil, tap} from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [DatePipe, AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit , OnDestroy {

  @Input() title!: string;

  private destroy$! : Subject<boolean>;
  protected currentDate$! : Observable<Date>;

  
  // INPUT: / 
  // PROCESS: Initialision d'un Observable qui émet la date actuelle toutes les secondes
  // OUTPUT: /
  ngOnInit(): void {
    console.log("(Header - OnInit) : Initialisation du composant Header");
    
    this.destroy$ = new Subject<boolean>();
    this.currentDate$ = interval(1000).pipe(
      takeUntil(this.destroy$),
      map(() => new Date()),
    );
  }




  // INPUT: /
  // PROCESS: Nettoyage de l'Observable pour éviter les fuites de mémoire lorsque le composant est détruit
  // OUTPUT: /
  ngOnDestroy(): void {
    console.log("(Header - OnInit) : Destruction du composant Header");
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
