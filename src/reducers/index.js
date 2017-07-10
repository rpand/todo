import { combineReducers } from 'redux';
import TaskReducer from './reducer_tasks';
import FilterReducer from './reducer_selectedFilters';

const rootReducer = combineReducers({
  tasks: TaskReducer,
  filters: FilterReducer
});

export default rootReducer;
