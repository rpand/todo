import { INCREMENT_ID, FETCH_ID } from '../actions';

const nextAvailID = 8;

export default function(state={}, action){
  switch(action.type){
    case INCREMENT_ID:
        return state++;
    case FETCH_ID:
        return state;
    default:
    	return nextAvailID;
  }
}