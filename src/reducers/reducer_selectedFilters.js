import { UPDATE_FILTERS, TOGGLE_COMPLETE, DELETE_TASK } from '../actions';
import { ALPHA_ASCENDING } from '../components/task_list';

export default function(state={lowPriority: true, medPriority:
  true, highPriority: true, todayOnly: false,
  sortBy: ALPHA_ASCENDING},
  action){

  switch(action.type){
    case UPDATE_FILTERS:
        return {...state, ...action.payload};
    default:
    	return state;
  }
}
