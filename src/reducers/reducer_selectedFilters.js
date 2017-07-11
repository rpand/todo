import { UPDATE_FILTERS, TOGGLE_COMPLETE } from '../actions';

const selectedFilters = {lowPriority: true, medPriority: true, highPriority: true, sortBy: "alphaAsc"};

export default function(state={}, action){
  switch(action.type){
    case UPDATE_FILTERS:
        console.log(state);
        console.log(action.payload);
        return {...state, ...action.payload};
    case TOGGLE_COMPLETE:
        return {...state};
    default:
        console.log("default filters");
    	return selectedFilters;
  }
}