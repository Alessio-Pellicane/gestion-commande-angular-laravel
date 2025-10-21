import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateTimeService {
  public currentDateTime = signal<Date>(new Date());

  constructor() {
    setInterval(() => {                         // A chaque interval de 1000 ms (1 seconde), le currentDateTime est mis à jour avec la date et l'heure actuelles
      this.currentDateTime.set(new Date());
    }, 1000);
  }
}
