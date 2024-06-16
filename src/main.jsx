import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import App from './App';
import TodoList from './assets/sideprojects/todolist';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>


    </Router>
  </React.StrictMode>
);
