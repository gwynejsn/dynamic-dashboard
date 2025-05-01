import { Component } from '@angular/core';
import { AppToDoComponent } from '../app-to-do/app-to-do.component';

@Component({
  selector: 'app-app-dashboard',
  imports: [AppToDoComponent, AppToDoComponent],
  templateUrl: './app-dashboard.component.html',
  styleUrl: './app-dashboard.component.css',
})
export class AppDashboardComponent {}
