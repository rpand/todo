import { SET_SORT, FETCH_TASKS, MARK_AS_COMPLETE } from '../actions';
import TODOITEMS from '../data.json';

export default function(state={}, action){
  switch(action.type){
    case SET_SORT:
      var newState = state.slice()
      return newState.sort(action.payload);
    case FETCH_TASKS:
    	return state;
    case MARK_AS_COMPLETE:
      var newToDoItems = state.slice();
      newToDoItems.map(function(todo, index) {
        if(index === action.payload){
          todo.done = !todo.done;
          console.log(todo);
        }
        return todo;
      });
      return newToDoItems;
    default:
    	return TODOITEMS;
  }
}
