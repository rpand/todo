import { UPDATE_LOW, UPDATE_MED, UPDATE_HIGH } from '../actions';

const selectedFilters = {lowPriority: true, medPriority: true, highPriority: true};

export default function(state={}, action){
  switch(action.type){
    case UPDATE_LOW:
    	return { lowPriority: !state.lowPriority, 
    			medPriority: state.medPriority, 
    			highPriority: state.highPriority}
    case UPDATE_MED:
    	return { lowPriority: state.lowPriority, 
    			medPriority: !state.medPriority, 
    			highPriority: state.highPriority}
    case UPDATE_HIGH:
    	return { lowPriority: state.lowPriority, 
    			medPriority: state.medPriority, 
    			highPriority: !state.highPriority}
    default:
    	return selectedFilters;
  }
}