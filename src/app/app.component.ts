import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppDashboardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dynamic-dashboard';
  backgroundImage = '/assets/images/background-wallpapers/2.png';

  ngOnInit() {
    this.updateBackgroundImage();
  }

  updateBackgroundImage() {
    document.body.style.backgroundImage = 'url(' + this.backgroundImage + ')';
  }
}
