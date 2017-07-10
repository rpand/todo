export const FETCH_TASKS = "fetch_tasks";
export const SET_SORT ="set_sort";
export const MARK_AS_COMPLETE = "mark_as_compelte";

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

//mark the task item as complete
export function markAsComplete(id){

  return {
    type: MARK_AS_COMPLETE,
    payload: id
  };
}
