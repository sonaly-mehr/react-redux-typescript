import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './Home';
import BankTransaction from './BankTransaction/BankTransaction';
import ToDoList from './ToDoList/ToDoList';
function App() {
  return (
    <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bank" element={<BankTransaction />} />
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
      </Router>
  );
}

export default App;
