import { v4 as uuidv4 } from "uuid";
import { ADD_TASK, CHANGE_DONE, EDIT_TASK,RESET } from "../constants/action-types";
import task from "../../components/Task/Task";

const initialState = {
  tasksList: [
    {
      id: uuidv4(),
      description: "I want to learn the korean language",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "I want to master programming",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "I want to learn horse riding",
      isDone: false,
    },
  ],
};

function taskReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        tasksList: [
          ...state.tasksList,
          { id: uuidv4(), description: payload, isDone: false },
        ],
      };
    case EDIT_TASK:
      return {
        tasksList: state.tasksList.map((tasks) => {
          if (task.id === payload.id) {
            return { ...task, description: payload.edited };
          } else {
            return task;
          }
        }),
      };
case CHANGE_DONE:
  return{
    tasksList:state.tasksList.map((task)=>task.id===payload ?{...task,isDone:!task.isDone}:task)
  };

  case RESET:return{tasksList:state.tasksList.map((task)=>task? {...task,isDone:false}:task)}
    default:
      return state;
  }
}

export default taskReducer;
