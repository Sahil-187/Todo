import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  standalone: true
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoUpdate: EventEmitter<void> = new EventEmitter();

  deleteTodo() {
    this.todoDelete.emit();
  }
  toggleDone() {
    this.todoUpdate.emit();
  }
}
