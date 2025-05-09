import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  addCardError = '';
  removeCardLabel = 'remove';

  cardToBeAdded: string | null = null;
  availableCards: { cardName: string; card: any }[] = [
    {
      cardName: 'to-do',
      card: AppToDoComponent,
    },
  ];
  cards: { cardName: string; card: any }[] = [this.availableCards[0]];

  // card actions
  showAddCardSelect = false;
  showDeleteCardSelect = false;
  removingCard = false;
  removeCardDisabled = false;

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
    this.addCardError = '';
    if (this.cardToBeAdded != null) {
      const cardFound = this.availableCards.find(
        (card) => card.cardName === this.cardToBeAdded
      );

      let cardExist = false;
      this.cards.forEach((card) => {
        if (card.cardName == cardFound?.cardName) cardExist = true;
      });

      if (cardExist) {
        console.log('already exist');
        this.addCardError = 'card already exists.';
      } else {
        if (cardFound) this.cards.push(cardFound);
        console.log(this.cards[0].cardName);
        this.showAddCardSelect = !this.showAddCardSelect;
      }
    }
    if (this.cards.length > 0) this.removeCardDisabled = false;
  }

  setRemovingCard() {
    if (!this.removingCard) {
      this.removeCardLabel = 'cancel';
      this.removingCard = true;
    } else {
      this.removeCardLabel = 'remove';
      this.removingCard = false;
    }
  }

  showAddCard() {
    this.showAddCardSelect = true;
    this.removingCard = false;
    this.removeCardLabel = 'remove';
  }

  removeCard(cardName: string) {
    this.removeCardLabel = 'cancel';
    this.cards = this.cards.filter((card) => card.cardName !== cardName);
    if (this.cards.length <= 0) this.removeCardDisabled = true;
  }

  cancelAddingCard() {
    this.showAddCardSelect = false;
    this.addCardError = '';
  }
}
