import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { useState, useEffect } from 'react';
import CheckAuth from './components/CheckAuth';
import AddForm from './components/AddForm';
import Godowns from './pages/Godowns';
import Employees from './pages/Employees';



function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path='/godowns' element={<Godowns />}>
        <Route path='/add' element={<Create />} />
        <Route path='/:id' element={<Read />} />
        <Route path='/delete/' element={<Delete />} />
      </Route> */}
      <Route element={<CheckAuth />}>
        <Route path="/" element={<Home />} />
        <Route path='/godowns' element={<Godowns />}>
          <Route path='/godowns/add' element={<AddForm />} />
        </Route>
        <Route path='/employees' element={<Employees />}>

        </Route>
      </Route>
      <Route path="*" element={<div>Not found...</div>} />
    </Routes>
  );
}

export default App;
