import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaArrowDown, FaTrashAlt } from 'react-icons/fa';
import './../css/todolist.css';

function TodoList() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const handleUserChange = (event) => setUser(event.target.value);
  const handleTaskChange = (event) => setTask(event.target.value);
  const handleInputTaskChange = (event) => setInputTask(event.target.value);

  const handleInitialTaskSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
      setStep(3);
    }
  };

  const handleAddTaskSubmit = (event) => {
    event.preventDefault();
    if (inputTask.trim()) {
      setTasks([...tasks, inputTask]);
      setInputTask('');
    }
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="home-button">Home</Link>
      </div>

      <div className="todo-container">
        <div className="header">
          <h1 style={{color: 'black'}}>To-Do List</h1>
        </div>

        {step === 1 && (
          <form className="form-container" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <div className="form-group">
              <label htmlFor="user" className="form-label">Name of user:</label>
              <input
                type="text"
                id="user"
                value={user}
                onChange={handleUserChange}
                required
                className="form-input"
              />
              <button
                type="submit"
                className="small-button"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 2 && user && (
          <form className="form-container" onSubmit={handleInitialTaskSubmit}>
            <div className="form-group">
              <label htmlFor="task" className="form-label">Name of task:</label>
              <input
                type="text"
                id="task"
                value={task}
                onChange={handleTaskChange}
                required
                className="form-input"
              />
              <button
                type="submit"
                className="small-button"
              >
                Submit Task
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div>
            <h2>Hi {user}!</h2>

            <form className="form-container" onSubmit={handleAddTaskSubmit}>
              <div className="form-group">
                <label htmlFor="inputTask" className="form-label">Add another task:</label>
                <div className="input-button-group">
                  <input
                    type="text"
                    id="inputTask"
                    value={inputTask}
                    onChange={handleInputTaskChange}
                    className="form-input"
                  />
                  <button
                    type="submit"
                    className="small-button"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </form>

            <ul className="task-list">
              {tasks.map((task, index) => (
                <li key={index} className="task-item">
                  <button
                    className="small-button task-move-btn"
                    onClick={() => moveTaskUp(index)}
                  >
                    <FaArrowUp />
                  </button>
                  <button
                    className="small-button task-move-btn"
                    onClick={() => moveTaskDown(index)}
                  >
                    <FaArrowDown />
                  </button>
                  <span>{task}</span>
                  <button
                    className="small-button task-delete-btn"
                    onClick={() => deleteTask(index)}
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default TodoList;
