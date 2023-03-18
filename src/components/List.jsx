import React from "react";
import "../styles/style.css";
import logo from "../img/logo.jpg";
import { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [newTasks, setNewTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleCheck = () => {};

  const handleAddTask = (e) => {
    e.preventDefault();
    setNewTasks([...newTasks, task]);
    setTask("");
  };

  return (
    <section className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 id="header" className="header">
        To-Do App
      </h1>

      <form className="new-task-container box" onSubmit={handleAddTask}>
        <label htmlFor="new-task">Add New Task</label>
        <input type="text" id="new-task" value={task} onChange={handleChange} />
        <input type="submit" id="addTask" value="Add Task" />
      </form>

      <div className="todo-list box">
        <h2>Incomplete Tasks</h2>
        <ul id="items">
          {newTasks.map((task, index) => (
            <div>
              <li key={index} className="item">
                <input type={"checkbox"} onClick={handleCheck} />{" "}
                <label>{task}</label>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="complete-list box">
        <h2>Completed Tasks</h2>
        <ul>
          <li className="item">
            Task Name <button className="delete">Delete</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ToDoList;
