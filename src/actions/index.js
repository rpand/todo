export const FETCH_TASKS = "fetch_tasks";
export const SET_SORT ="set_sort";

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
