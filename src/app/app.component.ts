import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dynamic-dashboard';
}
