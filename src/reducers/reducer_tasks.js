import { SET_SORT, FETCH_TASKS } from '../actions';
import TODOITEMS from '../data.json';

export default function(state={}, action){
  switch(action.type){
    case SET_SORT:
      var newState = state.slice()
      return newState.sort(action.payload);
    case FETCH_TASKS:
    	return state;
    default:
    	return TODOITEMS;
  }
}
