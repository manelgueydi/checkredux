import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/action";
import"./AddTask.css"

const AddTask = () => {
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAdd = () => {
    dispatch(addTask(newTask));
  };
  return (
    <div className="Div">
      <input
        type="text"
        placeholder="enter the task you want to add"
        onChange={handleChange}
      />
      <Button variant="secondary" onClick={handleAdd}>
        <h6 className="ADD">Add Task</h6>
      </Button>
    </div>
  );
};

export default AddTask;
