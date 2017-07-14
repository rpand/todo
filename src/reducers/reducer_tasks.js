import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_SORT, FETCH_TASKS, TOGGLE_COMPLETE, FETCH_TASK } from '../actions';
import TODOITEMS from '../data.json';

export default function(state=(localStorage.getItem("todos") != null  ? localStorage.todos : TODOITEMS), action){
  switch(action.type){
    case FETCH_TASKS:
    	return state;
    case DELETE_TASK:
      var newArray = state.filter(t => t.id != action.payload);
      localStorage.setItem("todos", JSON.stringify(Array.from(newArray)));
      return newArray
    case ADD_TASK:
      var newArray = [action.payload].concat(state);
      localStorage.setItem("todos", JSON.stringify(Array.from(newArray)));
      return JSON.parse(localStorage.todos);
    case EDIT_TASK:
      var newState = state.map((task) => { return (task.id == action.payload.id ? action.payload : task) });
      localStorage.setItem("todos", JSON.stringify(Array.from(newState)));
      return newState;
    case TOGGLE_COMPLETE:
      var newToDoItems = state.slice();
      newToDoItems.map(function(todo, index) {
        if(todo.id === action.payload){
          todo.done = !todo.done;
        }
      });
      localStorage.setItem("todos", JSON.stringify(Array.from(newToDoItems)));
      return newToDoItems;
    case FETCH_TASK:
      return state.find(() => { return t.id == action.payload })
    default:
      return (localStorage.getItem("todos") != null  ? JSON.parse(localStorage.todos) : state)
  }
}
