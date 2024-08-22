import React from 'react';
import { createRoot } from 'react-dom/client'; // Update this line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import App from './App';
import TodoList from './assets/sideprojects/todolist';
import Calculator from './assets/sideprojects/calculator';
import RecipeFinder from './assets/sideprojects/recipefinder.jsx';
import MovieFind from './assets/sideprojects/moviefind.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/recipefinder" element={<RecipeFinder />} />
        <Route path="/moviefind" element={<MovieFind />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
