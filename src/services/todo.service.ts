import {Injectable} from '@angular/core';

import {Component} from '@angular/core'
import {Store} from '@ngrx/store';

import * as TodoActions from '../actions/todos';

import {Observable} from 'rxjs/Observable'

interface AppState {
  todos: any;
}

@Injectable()
export class TodoService {
  todos: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todos');
  }
  
  public addTodo(newTodo) {
    this.store.dispatch({
      type: TodoActions.EVENTS.ADD,
      payload: newTodo
    });
  }

  public completeTodo(todo){
    this.store.dispatch({
      type: TodoActions.EVENTS.COMPLETE,
      payload: todo
    });
  }

  public deleteTodo(todo){
    this.store.dispatch({
      type: TodoActions.EVENTS.DELETE,
      payload: todo
    });
  }
}
