import { combineReducers } from 'redux';
import TaskReducer from './reducer_tasks';

const rootReducer = combineReducers({
  tasks: TaskReducer
});

export default rootReducer;
