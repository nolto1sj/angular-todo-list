import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';

  appInput: string = "";

  todoArray: Todo[] = [
    {
      task: "Fold Laundry",
      completed: false
    },
    {
      task: "Clean Desk",
      completed: false
    },
    {
      task: "Feed Gecko",
      completed: true
    },
    {
      task: "Feed Cat",
      completed: true
    },
    {
      task: "Feed Self",
      completed: false
    },
    {
      task: "Call State Farm",
      completed: false
    },
    {
      task: "Do Homework",
      completed: true
    }
  ];

  returnsTodo(): Todo[] {
    return this.todoArray;
  }
  addTask(taskInput: NgForm): void {
    let newTask: string = taskInput.form.value.input;
    let todo: Todo = {
      task: newTask,
      completed: false,
    };
    this.todoArray.push(todo);
  }

  completeTask(todo: Todo): void {
    todo.completed = true;
  }

  removeTask(todo: Todo): void {
    const index = this.todoArray.indexOf(todo);
    this.todoArray.splice(index, 1);
  }
}
