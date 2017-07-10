export const FETCH_TASKS = "fetch_tasks";
export const SET_SORT ="set_sort";
export const TOGGLE_COMPLETE = "toggle_complete";
export const UPDATE_LOW = "update_low";
export const UPDATE_MED = "update_med";
export const UPDATE_HIGH = "update_high";

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
export function toggleComplete(id){

  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
}

export function updateLow(){
  return {
      type: UPDATE_LOW
    };
}

export function updateMed(){
  return {
      type: UPDATE_MED
    };
}

export function updateHigh(){
  return {
      type: UPDATE_HIGH
    };
}
