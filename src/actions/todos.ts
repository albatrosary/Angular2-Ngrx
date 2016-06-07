// todos reducer
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const todosReducer: ActionReducer<any> = (state = [], action: Action) => {
  console.log('ACTION:', action.type, action.payload);
  switch(action.type){
    case ADD_TODO:
      return state.concat([Object.assign({}, action.payload, {id: state.length + 1})]);
    case UPDATE_TODO:
      return state.map(todo => {
        return todo.id !== action.payload.id ?
          todo :
          Object.assign({}, todo, action.payload)
      });
    case COMPLETE_TODO:
      return state.map(todo => {
        return todo.id !== action.payload.id ?
          todo :
          Object.assign({}, todo, {completed: true})
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
