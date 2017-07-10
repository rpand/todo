export const FETCH_TASKS = "fetch_tasks";
export const SET_SORT ="set_sort";
export const UPDATE_FILTERS = "update_filters";
export const TOGGLE_COMPLETE = "toggle_complete";

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
