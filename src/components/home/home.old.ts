import {Component} from '@angular/core'
import {Store} from '@ngrx/store';

import * as TodoActions from '../../actions/todos';

import {NewTodoInput} from '../todos/newtodo';
import {TodoList} from '../todos/todolist'

import {Observable} from 'rxjs/Observable'

interface AppState {
  todos: number;
}

@Component({
  selector: 'my-app',
  template: `
    <div>
      <log-monitor></log-monitor>
      <h2>Todos</h2>
      <new-todo-input (create)="addTodo($event)"></new-todo-input>
      =========
      <todo-list
        [todos]="todos | async"
        (complete)="completeTodo($event)"
        (delete)="deleteTodo($event)"
      ></todo-list>
      =========
      <div>
        <button (click)="show('ALL')">All</button>
        <button (click)="show('PENDING')">Pending</button>
        <button (click)="show('COMPLETE')">Complete</button>
      </div>
    </div>
  `,
  directives: [NewTodoInput, TodoList]
})
export class AppComponent {

  public todos: Observable<number>;

  // Store -> Reducer
  constructor(private store: Store<AppState>) {
    this.todos = store.select('todos');
  }
  addTodo(newTodo) {
    this.store.dispatch({
      type: TodoActions.ADD_TODO,
      payload: newTodo
    });
  }
  completeTodo(todo){
    this.store.dispatch({
      type: TodoActions.COMPLETE_TODO,
      payload: todo
    });
  }
  deleteTodo(todo){
    this.store.dispatch({
      type: TodoActions.DELETE_TODO,
      payload: todo
    });
  }
  show(filter){
    this.store.dispatch({
      type: TodoActions[filter]
    });
  }
}
　