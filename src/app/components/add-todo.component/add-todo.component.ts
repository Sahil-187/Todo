import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  @Output() todoAdd:  EventEmitter<Todo> = new EventEmitter();
  todoItem : any;
  ngOnInit(): void {
    this.todoItem = new FormGroup({
      title: new FormControl('', [Validators.required]),
      desc: new FormControl('',[Validators.required])
    });
  }

  onSubmit() {
    if (this.todoItem.invalid) {
      return ;
    }
    const todo = {
      sno: 8,
      title: this.todoItem.value.title,
      desc: this.todoItem.value.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.todoItem.reset();
  }
}
