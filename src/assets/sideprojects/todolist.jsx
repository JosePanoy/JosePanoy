import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './../css/todolist.css';

function TodoList() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState('');
  const [userNickName, setUserNickName] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [taskContent, setTaskContent] = useState('');

  function addUser(event) {
    event.preventDefault();
    const newUser = {
      name: userName,
      nickname: userNickName,
      tasks: []
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUserName('');
    setUserNickName('');
  }

  function handleNameChange(event) {
    setUserName(event.target.value);
  }

  function handleUserNickNameChange(event) {
    setUserNickName(event.target.value);
  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value);
  }

  function handleTaskContentChange(event) {
    setTaskContent(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();
    if (!selectedUser) return;

    const newTask = {
      name: taskName,
      content: taskContent
    };

    const updatedUsers = users.map((user) =>
      user === selectedUser ? { ...user, tasks: [...user.tasks, newTask] } : user
    );

    setUsers(updatedUsers);
    setSelectedUser((prevUser) => ({
      ...prevUser,
      tasks: [...prevUser.tasks, newTask]
    }));
    setTaskName('');
    setTaskContent('');
    setTaskForm(false);
  }

  const [showForm, setShowForm] = useState(false);
  const [showTaskForm, setTaskForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleAddTask = () => {
    setTaskForm(!showTaskForm);
  };

  function handleUserClick(user) {
    setSelectedUser(user);
    setSelectedTask(null);
  }

  function handleTaskClick(task) {
    setSelectedTask(task);
  }

  function handleDeleteUser(userToDelete) {
    if (window.confirm(`Are you sure you want to delete ${userToDelete.name}?`)) {
      const updatedUsers = users.filter((user) => user !== userToDelete);
      setUsers(updatedUsers);

      if (selectedUser === userToDelete) {
        setSelectedUser(null);
      }
    }
  }

  function handleDeleteTask(taskToDelete) {
    if (window.confirm(`Are you sure you want to delete task "${taskToDelete.name}"?`)) {
      const updatedUsers = users.map((user) =>
        user === selectedUser
          ? {
              ...user,
              tasks: user.tasks.filter((task) => task !== taskToDelete)
            }
          : user
      );

      const updatedSelectedUser = {
        ...selectedUser,
        tasks: selectedUser.tasks.filter((task) => task !== taskToDelete)
      };

      setUsers(updatedUsers);
      setSelectedUser(updatedSelectedUser);
      setSelectedTask(null);
    }
  }

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>

      <div className="main-container">
        <div className="side-panel">
          <h2>Todo List</h2>
          <button onClick={toggleForm}>Add User</button>
          {showForm && (
            <form onSubmit={addUser}>
              <label>
                <input
                  type="text"
                  value={userName}
                  onChange={handleNameChange}
                  placeholder="Add user Full Name"
                />
              </label>{' '}
              <br />
              <label>
                <input
                  type="text"
                  value={userNickName}
                  onChange={handleUserNickNameChange}
                  placeholder="Add your nickname here"
                />
              </label>{' '}
              <br />
              <button type="submit">Submit</button>
            </form>
          )}

<ul style={{ listStyleType: 'none', padding: 0 }}>
  {users.map((user, index) => (
    <li key={index} style={{ 
      display: 'flex', 
      alignItems: 'center', 
      marginBottom: '10px', 
      border: '1px solid #ccc', 
      padding: '8px', 
      borderRadius: '4px' 
    }}>
      <span
        style={{ cursor: 'pointer', flex: '1' }}
        onClick={() => handleUserClick(user)}
      >
        {user.name}
      </span>
      <FontAwesomeIcon
        icon={faTrash}
        style={{ marginLeft: '5px', cursor: 'pointer', color: 'red' }}
        onClick={() => handleDeleteUser(user)}
      />
    </li>
  ))}
</ul>

        </div>

        <div className="main-content">
          <div className="search-container">
            <button onClick={toggleAddTask} className="add-task-button">
              Add Task
            </button>
          </div>

          <div className="todo-items">
            {showTaskForm && (
              <form className="task-inputs" onSubmit={addTask}>
                <input
                  type="text"
                  value={taskName}
                  onChange={handleTaskNameChange}
                  placeholder="Add your task name"
                />
                <textarea
                  value={taskContent}
                  onChange={handleTaskContentChange}
                  placeholder="Write your message here..."
                />
                <button type="submit">Save</button>
              </form>
            )}
            {selectedUser && !selectedTask && (
              <div>
                <h2 style={{ cursor: 'pointer' }}>Hi! {selectedUser.name}</h2>
                <ul>
                  {selectedUser.tasks.map((task, index) => (
                   <li
                   key={index}
                   onClick={() => handleTaskClick(task)}
                   style={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     cursor: 'pointer',
                     padding: '10px',
                     borderBottom: '1px solid #ccc'
                   }}
                 >
                   <span>{task.name}</span>
                   <button
                     style={{ marginLeft: '5px', cursor: 'pointer', color: 'red', background: 'none', border: 'none' }}
                     onClick={(e) => { e.stopPropagation(); handleDeleteTask(task); }}
                   >
                     Delete
                   </button>
                 </li>
                 
                  ))}
                </ul>
              </div>
            )}
            {selectedTask && (
              <div
                className="todo-item"
                style={{
                  marginTop: '20px',
                  cursor: 'pointer',
                  padding: '20px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <h3
                  style={{
                    marginBottom: '10px',
                    color: '#333',
                    cursor: 'default',
                    borderBottom: '1px solid #ccc',
                    width: '100%',
                    paddingBottom: '10px'
                  }}
                >
                  {selectedTask.name}
                </h3>
                <p
                  style={{
                    lineHeight: '1.6',
                    cursor: 'default',
                    color: '#666',
                    marginTop: '10px'
                  }}
                >
                  {selectedTask.content}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
