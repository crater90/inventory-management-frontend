import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homeu from "./pagesu/Homeu";
import Homea from "./pagesa/Homea";
import Forgot from "./pages/Forgot";
import Stocks from "./pages/Stock";
import CheckAuth from "./components/CheckAuth";
import Godowns from "./pages/Godowns";
import Godownsa from "./pagesa/Godownsa";
import Employees from "./pages/Employees";
import Employeesa from "./pagesa/Employeesa";
import Inwards from "./pages/Inwards";
import Outwards from "./pages/Outwards";
import Returns from "./pages/Returns";
import Reports from "./pages/Report";
import Inwardsu from "./pagesu/Inwardsu";
import Inwardsa from "./pagesa/Inwardsa";
import Outwardsu from "./pagesu/Outwardsu";
import Outwardsa from "./pagesa/Outwardsa";
import Returnsu from "./pagesu/Returnsu";
import Returnsa from "./pagesa/Returnsa";
import Reportsu from "./pagesu/Reportu";
import Reportsa from "./pagesa/Reporta";
import Updates from "./pages/Updates";
import Features from "./pages/Features";
import Updatesu from "./pagesu/Updatesu";
import Updatesa from "./pagesa/Updatesa";
import Featuresu from "./pagesu/Featuresu";
import Featuresa from "./pagesa/Featuresa";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path='/godowns' element={<Godowns />}>
        <Route path='/add' element={<Create />} />
        <Route path='/:id' element={<Read />} />
        <Route path='/delete/' element={<Delete />} />
      </Route> */}
      <Route element={<CheckAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/u" element={<Homeu />} />
        <Route path="/a" element={<Homea />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/godowns" element={<Godowns />} />
        <Route path="/godownsa" element={<Godownsa />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employeesa" element={<Employeesa />} />
        <Route path="/inwards" element={<Inwards />} />
        <Route path="/outwards" element={<Outwards />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/inwardsu" element={<Inwardsu />} />
        <Route path="/inwardsa" element={<Inwardsa />} />
        <Route path="/outwardsu" element={<Outwardsu />} />
        <Route path="/returnsu" element={<Returnsu />} />
        <Route path="/reportsu" element={<Reportsu />}></Route>
        <Route path="/outwardsa" element={<Outwardsa />} />
        <Route path="/returnsa" element={<Returnsa />} />
        <Route path="/reportsa" element={<Reportsa />}></Route>
        <Route path="/updates" element={<Updates />}></Route>
        <Route path="/updatesa" element={<Updatesa />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/updatesu" element={<Updatesu />}></Route>
        <Route path="/featuresu" element={<Featuresu />}></Route>
        <Route path="/featuresa" element={<Featuresa />}></Route>
      </Route>
      <Route path="*" element={<div>Not found...</div>} />
    </Routes>
  );
}

export default App;
