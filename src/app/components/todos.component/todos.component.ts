import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item.component/todo-item.component";
import { AddTodoComponent } from "../add-todo.component/add-todo.component";

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  standalone: true
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor() {
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")!) : [];
    console.log(this.todos);
  }

  deleteTodo(index : number) {
    console.log("Deleting todo:", this.todos[index]);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log("Adding todo:", todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));  
  }

  updateTodo(index: number) {
    this.todos[index].active = !this.todos[index].active;
    console.log("Updating todo:", this.todos[index]);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
