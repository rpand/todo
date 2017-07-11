import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_SORT, FETCH_TASKS, TOGGLE_COMPLETE } from '../actions';
import TODOITEMS from '../data.json';

export default function(state={}, action){
  switch(action.type){
    case FETCH_TASKS:
    	return state;
    case DELETE_TASK:
      return state.filter(t => t.id == action.payload)
    case ADD_TASK:
      return [action.payload].concat(state);
    case EDIT_TASK:
      return state.map(() => { return t.id == action.payload.id ? t : action.payload});
    case TOGGLE_COMPLETE:
      var newToDoItems = state.slice();
      newToDoItems.map(function(todo, index) {
        if(index === action.payload){
          todo.done = !todo.done;
        }
      });
      return newToDoItems;
    default:
    	return TODOITEMS;
  }
}
