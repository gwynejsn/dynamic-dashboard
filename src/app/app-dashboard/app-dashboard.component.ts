import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppToDoComponent } from '../app-to-do/app-to-do.component';

@Component({
  selector: 'app-app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './app-dashboard.component.html',
  styleUrl: './app-dashboard.component.css',
})
export class AppDashboardComponent {
  greeting = '';
  username = 'Gwyne';

  cardToBeAdded: string | null = null;
  availableCards = [
    {
      cardName: 'to-do',
      card: AppToDoComponent,
    },
  ];
  cards: Type<any>[] = [AppToDoComponent];

  // card actions
  showAddCardSelect = false;
  showDeleteCardSelect = false;

  constructor() {
    this.updateGreeting();
  }

  updateGreeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      this.greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      this.greeting = 'Good afternoon';
    } else {
      this.greeting = 'Good evening';
    }
    this.greeting += ', ' + this.username;
  }

  addCard() {
    if (this.cardToBeAdded != null) {
      const cardFound = this.availableCards.find(
        (card) => card.cardName === this.cardToBeAdded
      );

      if (cardFound) this.cards.push(cardFound.card);
      this.showAddCardSelect = !this.showAddCardSelect;
    }
  }
}
