import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CheckAuth from './components/CheckAuth';
import Godowns from './pages/Godowns';
import Employees from './pages/Employees';
import Inwards from './pages/Inwards';
import Outwards from './pages/Outwards';
import Returns from './pages/Returns';

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
        <Route path='/godowns' element={<Godowns />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/inwards' element={<Inwards />} />
        <Route path='/outwards' element={<Outwards />} />
        <Route path='/returns' element={<Returns />} />
      </Route>
      <Route path="*" element={<div>Not found...</div>} />
    </Routes >
  );
}

export default App;
