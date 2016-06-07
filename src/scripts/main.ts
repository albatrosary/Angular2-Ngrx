import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideStore} from '@ngrx/store';
import {AppComponent} from '../components'

import {todosReducer} from '../actions/todos';

// Provider StoreにtodosとしてtodosReducerを登録
bootstrap(AppComponent, [
    provideStore({todos: todosReducer})  
]);
