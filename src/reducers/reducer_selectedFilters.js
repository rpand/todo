import { UPDATE_FILTERS, TOGGLE_COMPLETE, DELETE_TASK } from '../actions';

export default function(state={lowPriority: true, medPriority:
  true, highPriority: true, todayOnly: false,
  sortBy: "alphaAsc"},
  action){
    
  switch(action.type){
    case UPDATE_FILTERS:
        return {...state, ...action.payload};
    default:
    	return state;
  }
}
