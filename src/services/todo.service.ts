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
      type: TodoActions.ADD_TODO,
      payload: newTodo
    });
  }

  public completeTodo(todo){
    this.store.dispatch({
      type: TodoActions.COMPLETE_TODO,
      payload: todo
    });
  }

  public deleteTodo(todo){
    this.store.dispatch({
      type: TodoActions.DELETE_TODO,
      payload: todo
    });
  }
}
