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
  schoolToDoList = [
    { task: 'Do math homework', checked: false },
    { task: 'Do dishes', checked: false },
    { task: 'Do DSA', checked: false },
  ];

  randomToDoList = [{ task: 'sleep...', checked: false }];

  myemptyToDoList = [];

  toDoCategory = [
    { category: 'school', toDoList: this.schoolToDoList },
    { category: 'random', toDoList: this.randomToDoList },
    { category: 'myempty', toDoList: this.myemptyToDoList },
  ];

  categoryChosen: {
    category: string;
    toDoList: { task: string; checked: boolean }[];
  } | null = this.toDoCategory[0];

  changeCategory(event: Event) {
    const newCategoryChosen =
      this.toDoCategory.find(
        (item) => item.category === (event.target as HTMLSelectElement).value
      ) ?? null;
    this.categoryChosen = newCategoryChosen ? { ...newCategoryChosen } : null;
  }

  newTaskInput = '';

  addNewTask() {
    if (this.newTaskInput.length > 0) {
      this.toDoCategory
        .find((item) => item.category === this.categoryChosen?.category)
        ?.toDoList.push({
          task: this.newTaskInput,
          checked: false,
        });

      this.newTaskInput = '';
    }
  }
}
