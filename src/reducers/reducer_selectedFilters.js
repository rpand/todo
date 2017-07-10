import { UPDATE_FILTERS } from '../actions';

const selectedFilters = {lowPriority: true, medPriority: true, highPriority: true};

export default function(state={}, action){
  switch(action.type){
    case UPDATE_FILTERS:
        console.log(state);
        console.log(action.payload);
        return {...state, ...action.payload};
    default:
    	return selectedFilters;
  }
}