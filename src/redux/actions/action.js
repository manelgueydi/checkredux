import { ADD_TASK, EDIT_TASK,CHANGE_DONE,RESET } from "../constants/action-types";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload: payload,
  };
};
export const editTask = (payload) => {
  console.log(editTask);

  return {
    type: EDIT_TASK,
    payload: payload,
  };
};
export const reset = (payload) => {


  return {
    type: RESET,
    payload: payload,
  };
};

export const changeDone = (payload) => {
  console.log(editTask);

  return {
    type: CHANGE_DONE,
    payload: payload,
  };
};
