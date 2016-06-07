import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideStore} from '@ngrx/store';
import {AppComponent} from '../components'

import {todosReducer} from '../actions/todos';

bootstrap(AppComponent, [
    provideStore({todos: todosReducer})  
]);
