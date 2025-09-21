import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos.component/todos.component';
import { AddTodoComponent } from './components/add-todo.component/add-todo.component';
import { AboutComponent } from './components/about.component/about.component';

export const routes: Routes = [
    {path: '', redirectTo: '/todos', pathMatch: 'full'},
    {path: 'todos', component: TodosComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: '/todos'}
];
