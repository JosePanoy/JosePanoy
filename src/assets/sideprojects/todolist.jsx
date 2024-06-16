import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './../css/todolist.css';


function TodoList() {

    const [users, setUser] = useState([])
    const [userName, setUserName] = useState("")
    const [userNickName, setNickName] = useState("")
    const [taskName , setTaskName]  = useState("")
    const [taskContent, setTaskContent] = useState("")
    

    function addUser ( ){
        event.preventDefault();
        const newUser = { name: userName,
                        nickname : userNickName}

        setUser (u => [...u, newUser])
    }

    function handleRemoveUser (index) {

    }

    function handleNameChange(event) {
        setUserName(event.target.value);
    }

    function handleUserNickNameChange(event) {
        setNickName(event.target.value);
    }   



    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
      setShowForm(!showForm);
    };



    
    const [showTaskForm, setTaskForm] = useState(false);

    const toggleAddTask = () => {
      setTaskForm(!showTaskForm);
    };

    return (
        <div>
            <div className="navbar">
                <Link to="/" className="home-button">Home</Link>
            </div>

            <div class="main-container">


    <div class="side-panel">
        <h2>Todo List</h2>
        <button onClick={toggleForm}>Add User</button>
      {showForm && (
        <form onSubmit={addUser}>
  <label>
    <input type="text" value={userName} onChange={handleNameChange} placeholder='Add user Full Name'/>
  </label> <br />
  <label>
    <input type="text" value={userNickName} onChange={handleUserNickNameChange} placeholder='Add you nickname here' />
  </label> <br />
  <button type="submit">Submit</button>
</form>

      )}

            <ul>
            {users.map((user, index) =>
                <li key={index}> {user.name} 
                </li>
                 )}
            </ul>

    </div>



                <div class="main-content">
                <div class="search-container">
                    <button onClick={toggleAddTask} class="add-task-button">Add Task</button>
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>

                <div class="todo-items">

                {showTaskForm && (
                    <div class="task-inputs">
                    <input type="text" value={userName} onChange={handleNameChange} placeholder="Add your task name" />
                    <textarea placeholder="Write your message here..."></textarea>
                    <button>Save</button>
                </div>

                )}
                    <div class="todo-item">
                
                    </div>
                </div>
            </div>

</div>

        </div>
    );
}

export default TodoList;
