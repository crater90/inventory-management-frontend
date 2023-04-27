import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { useState, useEffect } from 'react';
import CheckAuth from './components/CheckAuth';



function App() {
  
  return (
    //<Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<CheckAuth/>}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<div>Not found...</div>} />

      </Routes>
    //</Router>
  );
}

export default App;
