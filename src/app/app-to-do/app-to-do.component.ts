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
  showCreateNewCategory = true;
  clearBtnDisabled = true;

  schoolToDoList = [
    {
      task: 'Do math homework',
      deadline: new Date(2025, 4, 2),
      checked: false,
    },
    { task: 'Do dishes', deadline: new Date(2025, 4, 5), checked: false },
    { task: 'Do DSA', deadline: new Date(2025, 4, 8), checked: false },
  ];

  randomToDoList = [
    { task: 'sleep...', deadline: new Date(2025, 4, 15), checked: false },
  ];

  myemptyToDoList = [];

  toDoCategory = [
    { category: 'school', toDoList: this.schoolToDoList },
    { category: 'random', toDoList: this.randomToDoList },
    { category: 'myempty', toDoList: this.myemptyToDoList },
  ];

  categoryChosen: {
    category: string;
    toDoList: { task: string; deadline: Date; checked: boolean }[];
  } | null = this.toDoCategory[0];

  changeCategory(event: Event) {
    const newCategoryChosen =
      this.toDoCategory.find(
        (item) => item.category === (event.target as HTMLSelectElement).value
      ) ?? null;
    this.categoryChosen = newCategoryChosen ? { ...newCategoryChosen } : null;
  }

  newTaskInput = '';
  taskDeadlineInput = new Date(); // default date when not added is current date

  addNewTask() {
    if (this.newTaskInput.trim()) {
      this.toDoCategory
        .find((item) => item.category === this.categoryChosen?.category)
        ?.toDoList.push({
          task: this.newTaskInput.trim(),
          deadline: new Date(this.taskDeadlineInput),
          checked: false,
        });

      this.newTaskInput = '';
    }
  }

  updateClearButtonState() {
    if (this.categoryChosen)
      this.clearBtnDisabled = !this.categoryChosen.toDoList.some(
        (task) => task.checked
      );
  }

  clear() {
    if (this.categoryChosen) {
      this.categoryChosen.toDoList = this.categoryChosen.toDoList.filter(
        (task) => !task.checked
      );
      this.updateClearButtonState();
    }
  }

  newCategoryInput = '';
  addNewCategory() {
    if (this.newCategoryInput.trim()) {
      this.toDoCategory.push({
        category: this.newCategoryInput.trim(),
        toDoList: [],
      });

      this.categoryChosen = this.toDoCategory[this.toDoCategory.length - 1];

      this.newCategoryInput = '';
      this.showCreateNewCategory = true;
    }
  }
}
