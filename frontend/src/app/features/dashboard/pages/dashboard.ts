import { Component } from '@angular/core';
import { Header } from '../../../shared/components/header/header';
import { RouterLink } from '@angular/router';
import { TITLE } from '@core/constants';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [Header, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  protected readonly title : string = TITLE.DASHBOARD;
}
