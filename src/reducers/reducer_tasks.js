import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_SORT, FETCH_TASKS, TOGGLE_COMPLETE, FETCH_TASK } from '../actions';
import TODOITEMS from '../data.json';

export default function(state=TODOITEMS, action){
  switch(action.type){
    case FETCH_TASKS:
    	return state;
    case DELETE_TASK:
      return state.filter(t => t.id != action.payload)
    case ADD_TASK:
      return [action.payload].concat(state);
    case EDIT_TASK:
      var newState = state.map((task) => { return (task.id == action.payload.id ? action.payload : task) });
      return newState;
    case TOGGLE_COMPLETE:
      var newToDoItems = state.slice();
      newToDoItems.map(function(todo, index) {
        if(index === action.payload){
          todo.done = !todo.done;
        }
      });
      return newToDoItems;
    case FETCH_TASK:
      return state.find(() => { return t.id == action.payload })
    default:
    	return state;
  }
}
