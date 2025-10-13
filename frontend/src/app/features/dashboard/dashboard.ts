import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  protected title = "Tableau de bord";
}
