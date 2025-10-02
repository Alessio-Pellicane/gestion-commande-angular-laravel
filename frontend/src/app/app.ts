import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  
import { Clients } from './clients/clients';  


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Clients],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
