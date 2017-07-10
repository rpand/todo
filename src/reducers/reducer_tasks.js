import { SET_SORT, FETCH_TASKS, TOGGLE_COMPLETE } from '../actions';
import TODOITEMS from '../data.json';

export default function(state={}, action){
  switch(action.type){
    case SET_SORT:
      var newState = state.slice()
      return newState.sort(action.payload);
    case FETCH_TASKS:
    	return state;
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
