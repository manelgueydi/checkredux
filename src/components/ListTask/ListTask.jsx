import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Task from "../Task/Task";
import { reset } from "../../redux/actions/action";
import"./ListTask.css"

const ListTask = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.taskReducer.tasksList);

  const [showDone, setShowDone] = useState(false);
  const [showNotDone, setShowNotDone] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleShowDone = () => {
    setShowDone(true);
    setShowNotDone(false);
  };
  const handleShowNotDone = () => {
    setShowNotDone(true);
    setShowDone(false);
  };

  const handleList = () => {
    if (showDone === true) {
      setTasks(tasksList.filter((task) => task.isDone === true));
    } else if (showNotDone === true) {
      setTasks(tasksList.filter((task) => task.isDone === false));
    }
  };

  useEffect(() => {
    setTasks(tasksList);

    handleList();
  }, [showDone, showNotDone, tasksList]);

  const handleReset = () => {
    dispatch(reset());
    setShowDone(false);
    setShowNotDone(false);
  };

  return (
    <div>
      <div className="div">
        <Button variant="success" onClick={handleShowDone}>
          <h5 className="done">Fiter by done</h5>
        </Button>
        <Button variant="danger" onClick={handleShowNotDone}>
          <h5 className="done">Fiter by not done</h5>
        </Button>  
        <Button variant="info" onClick={handleReset}>
          <h5 className="done">Reset</h5>
        </Button>
      </div>
      <div>
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
