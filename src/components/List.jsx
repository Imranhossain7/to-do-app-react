import React from "react";
import "../styles/style.css";
import logo from "../img/logo.jpg";
import { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [newTasks, setNewTasks] = useState([]);
  const [completeTask, setCompletetask] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setNewTasks([...newTasks, task]);
    setTask("");
  };

  const handleCheck = (index, isChecked) => {
    if (isChecked) {
      setCompletetask([...completeTask, newTasks[index]]);
    }
    const newItems = [...newTasks];
    newItems.splice(index, 1);
    setNewTasks(newItems);
  };

  const handleDelete = (index) => {
    const remainTasks = [...completeTask];
    remainTasks.splice(index, 1);
    setCompletetask(remainTasks);
    console.log(completeTask, remainTasks);
  };

  return (
    <section className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="header">To-Do App</h1>

      <form className="new-task-container box" onSubmit={handleAddTask}>
        <label htmlFor="new-task">Add New Task</label>
        <input type="text" value={task} onChange={handleChange} />
        <input type="submit" value="Add Task" />
      </form>

      <div className="todo-list box">
        <h2>Incomplete Tasks</h2>
        <ul>
          {newTasks.map((task, index) => (
            <div>
              <li key={index} className="item">
                <input
                  type={"checkbox"}
                  onChange={(e) => handleCheck(index, e.target.checked)}
                />
                <label>{task}</label>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="complete-list box">
        <h2>Completed Tasks</h2>
        <ul>
          {completeTask.map((task, index) => (
            <div>
              <li key={index} className="item">
                <label>{task}</label>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ToDoList;
