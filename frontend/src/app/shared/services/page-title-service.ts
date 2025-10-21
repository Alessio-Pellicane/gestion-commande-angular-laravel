import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageTitleService {

  private _pageTitle = signal<string>('');                          // Signal privé pour stocker le titre de la page
  public readonly pageTitleSignal = this._pageTitle.asReadonly();   // Signal public en lecture seule pour accéder au titre de la page


  // INPUT: Le nouveau titre de la page sous forme de chaîne de caractères
  // PROCESS: Met à jour le signal (attention de bien modifier la MEME reference et pas refaire un ... = signal(...). Cela crée une nouvelle référence du signal) de titre de la page avec la nouvelle valeur fournie pour afficher dynamiquement le titre de la page actuelle
  // OUTPUT: /
  setPageTitle(newPageTitle: string) {
    this._pageTitle.set(newPageTitle);
  }
}
