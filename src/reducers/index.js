import { combineReducers } from 'redux';
import TaskReducer from './reducer_tasks';
import FilterReducer from './reducer_selectedFilters';
import AvailableIDReducer from './reducer_availableID';

const rootReducer = combineReducers({
  tasks: TaskReducer,
  filters: FilterReducer,
  nextID: AvailableIDReducer
});

export default rootReducer;
