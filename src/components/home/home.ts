import {Component} from '@angular/core'
import {Store} from '@ngrx/store';

import {NewTodoInput} from '../todos/newtodo';
import {TodoList} from '../todos/todolist'

import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Todos</h2>
      <new-todo-input (create)="addTodo($event)"></new-todo-input>
      =========
      <todo-list
        [todos]="todos | async"
        (complete)="completeTodo($event)"
        (delete)="deleteTodo($event)"
      >
      </todo-list>
    </div>
  `,
  directives: [NewTodoInput, TodoList],
  providers: [TodoService]
})
export class AppComponent {
  todos: any;

  // Store -> Reducer
  constructor(private todoService: TodoService) {
    this.todoService = todoService;
    this.todos = this.todoService.todos
  }

  addTodo(newTodo) {
    this.todoService.addTodo(newTodo);
  }

  completeTodo(todo){
    this.todoService.completeTodo(todo);
  }

  deleteTodo(todo){
    this.todoService.deleteTodo(todo);
  }
}
　