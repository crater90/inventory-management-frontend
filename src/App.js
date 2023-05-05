import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
<<<<<<< Updated upstream
import Homeu from "./pages/Homeu";
=======
import Homeu from "./pagesU/Homeu";
>>>>>>> Stashed changes
import CheckAuth from "./components/CheckAuth";
import Godowns from "./pages/Godowns";
import Employees from "./pages/Employees";
import Inwards from "./pages/Inwards";
import Outwards from "./pages/Outwards";
import Returns from "./pages/Returns";
import Reports from "./pages/Report";
<<<<<<< Updated upstream
import Inwardsu from "./pages/Inwardsu";
import Outwardsu from "./pages/Outwardsu";
import Returnsu from "./pages/Returnsu";
import Reportsu from "./pages/Reportu";
import Updates from "./pages/Updates";
import Features from "./pages/Features";
import Updatesu from "./pages/Updatesu";
import Featuresu from "./pages/Featuresu";
=======
import Inwardsu from "./pagesU/Inwardsu";
import Outwardsu from "./pagesU/Outwardsu";
import Returnsu from "./pagesU/Returnsu";
import Reportsu from "./pagesU/Reportu";
import Updates from "./pages/Updates";
import Features from "./pages/Features";
import Updatesu from "./pagesU/Updatesu";
import Featuresu from "./pagesU/Featuresu";
>>>>>>> Stashed changes

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
        <Route path="/u" element={<Homeu />} />
        <Route path="/godowns" element={<Godowns />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/inwards" element={<Inwards />} />
        <Route path="/outwards" element={<Outwards />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/inwardsu" element={<Inwardsu />} />
        <Route path="/outwardsu" element={<Outwardsu />} />
        <Route path="/returnsu" element={<Returnsu />} />
        <Route path="/reportsu" element={<Reportsu />}></Route>
        <Route path="/updates" element={<Updates />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/updatesu" element={<Updatesu />}></Route>
        <Route path="/featuresu" element={<Featuresu />}></Route>
      </Route>
      <Route path="*" element={<div>Not found...</div>} />
    </Routes>
  );
}

export default App;
