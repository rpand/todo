import { INCREMENT_ID, FETCH_ID } from '../actions';

export default function(state, action){
  switch(action.type){
    case INCREMENT_ID:
        return {nextID:state.nextID++}; 
    case FETCH_ID:
        return state
    default:
    	if(state==undefined){
    		return {nextID:8};
    	}
    	console.log(state);
    	return state;
  }
}