import { SET_SORT, FETCH_TASKS, TOGGLE_COMPLETE } from '../actions';
import TODOITEMS from '../data.json';

export default function(state={}, action){
  switch(action.type){
    case FETCH_TASKS:
    	return state;
    case TOGGLE_COMPLETE:
      var newToDoItems = state.slice();
      newToDoItems.map(function(todo, index) {
        if(index === action.payload){
          todo.done = !todo.done;
        }
      });
      console.log("new items");
      return newToDoItems;
    default:
    	return TODOITEMS;
  }
}