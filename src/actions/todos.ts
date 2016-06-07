import { ActionReducer, Action } from '@ngrx/store';

export const EVENTS = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  COMPLETE: 'COMPLETE'
}

export const todosReducer: ActionReducer<any> = (items = [], action: Action) => {
  console.log('ACTION:', action.type, action.payload);

  switch(action.type){
    case EVENTS.ADD:
      return items.concat([Object.assign({}, action.payload, {id: items.length + 1})]);
    case EVENTS.UPDATE:
      return items.map(todo => {
        return todo.id !== action.payload.id ?
          todo :
          Object.assign({}, todo, action.payload)
      });
    case EVENTS.COMPLETE:
      return items.map(todo => {
        return todo.id !== action.payload.id ?
          todo :
          Object.assign({}, todo, {completed: true})
      });
    case EVENTS.DELETE:
      return items.filter(todo => todo.id !== action.payload.id);
    default:
      return items;
  }
}
