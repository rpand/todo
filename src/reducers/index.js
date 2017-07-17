import { combineReducers } from 'redux';
import TaskReducer from './reducer_tasks';
import FilterReducer from './reducer_selectedFilters';
import AvailableIDReducer from './reducer_availableID';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  tasks: TaskReducer,
  filters: FilterReducer,
  nextID: AvailableIDReducer,
  form: formReducer
});

export default rootReducer;
