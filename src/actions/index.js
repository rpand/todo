export const FETCH_TASKS = "fetch_tasks";
export const SET_SORT ="set_sort";
export const MARK_AS_COMPLETE = "mark_as_complete";
export const UPDATE_FILTERS = "update_filters";

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
export function markAsComplete(id){

  return {
    type: MARK_AS_COMPLETE,
    payload: id
  };
}
