import { UPDATE_FILTERS, TOGGLE_COMPLETE, DELETE_TASK } from '../actions';

const selectedFilters = {lowPriority: true, medPriority: true, highPriority: true, todayOnly: false, sortBy: "alphaAsc"};

export default function(state={}, action){
  switch(action.type){
    case UPDATE_FILTERS:
        return {...state, ...action.payload};
    default:
    	return selectedFilters;
  }
}
