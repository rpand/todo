export const FETCH_TASKS = "fetch_tasks";
export const SET_SORT ="set_sort";
export const ADD_TASK ="add_task";
export const EDIT_TASK ="edit_task";
export const DELETE_TASK ="delete_task";
export const UPDATE_FILTERS = "update_filters";
export const TOGGLE_COMPLETE = "toggle_complete";
export const FETCH_ID = "fetch_id";
export const INCREMENT_ID = "increment_id";

export function fetchTasks(){
  //fetch tasks from json object or HTML5 session storage
  return {
    type: FETCH_TASKS
  };
}

export function setSort(sortFunction){
  return {
    type: SET_SORT,
    payload: sortFunction
  };
}

export function updateFilters(changedObject){
  return {
    type: UPDATE_FILTERS,
    payload: changedObject
  };
}

//mark the task item as complete
export function toggleComplete(id){

  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
}

export function addTask(task){
  return {
    type: ADD_TASK,
    payload: task
  };
}

export function editTask(task){
  return {
    type: EDIT_TASK,
    payload: task
  };
}

export function deleteTask(id){
  return {
    type: DELETE_TASK,
    payload: id
  };
}

export function incrementID(){
  console.log('increment this');
  return {
    type: INCREMENT_ID
  }
}

export function getNextID(){
  console.log("get next id");
  return {
    type: FETCH_ID
  }
}