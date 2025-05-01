import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-to-do',
  imports: [CommonModule, FormsModule],
  templateUrl: './app-to-do.component.html',
  styleUrl: './app-to-do.component.css',
})
export class AppToDoComponent {
  toDoList: string[] = ['okay'];
  history: string[] = [];

  isItemChecked = true;
  putToTrash(index: number) {
    console.log('trashing');
  }
}
