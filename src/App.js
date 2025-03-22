import React from 'react';
import './App.css';
import BooksList from './components/BooksList';
import StudentsList from './components/StudentsList';

function App() {
  return (
    <div className="App">
      <h1>Library Management System</h1>
      <div className="lists-container">
        <BooksList />
        <StudentsList />
      </div>
    </div>
  );
}

export default App;