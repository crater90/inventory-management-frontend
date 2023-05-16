import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CheckAuth from "./components/CheckAuth";
import Godowns from "./pages/Godowns";
import Employees from "./pages/Employees";
import Inwards from "./pages/Inwards";
import Outwards from "./pages/Outwards";
import Returns from "./pages/Returns";
import Reports from "./pages/Report";
import Updates from "./pages/Updates";
import Features from "./pages/Features";
import Forgot from "./pages/Forgot";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";
import Stocks from "./pages/Stocks";
import NotFound from "./components/NotFound";
import Invoice from "./pages/Invoice";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<Forgot />} />

      {/* only super admins can see this */}
      <Route element={<CheckAuth allowedRoles={[0]} />}>
        <Route path="/reports" element={<Reports />} />
        <Route path="/invoice" element={<Invoice />} />
      </Route>

      {/* admins and super admins can see this */}
      <Route element={<CheckAuth allowedRoles={[0, 1]} />}>
        <Route path="/godowns" element={<Godowns />} />
        <Route path="/employees" element={<Employees />} />
      </Route>

      {/* admins, super admins and employees see this */}
      <Route element={<CheckAuth allowedRoles={[0, 1, 2]} />}>
        <Route path="/" element={<Home />} />
        <Route path="/inwards" element={<Inwards />} />
        <Route path="/outwards" element={<Outwards />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/features" element={<Features />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
