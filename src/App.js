import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PatientBill from "./Component/Dashboard/PatientBill";
import PageDashboard from "./pages/PageDashboard";
import Pateint from "./pages/Pateint";
import Appointment from "./pages/Appointment";
import Support from "./pages/Support";
import Setting from "./pages/Setting";
function App() {
  return (
    <div >


   
    <Routes>
      {/* always navigate to biiling section when open  */}
      <Route path="/" element={<Navigate to="/billing" />} />

      <Route path="/" element={<Dashboard />}>
        {/* Nested Routes */}
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/patient" element={<Pateint />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/billing" element={<PatientBill />} />
        <Route path="/support" element={<Support />} />
        <Route path="/settings" element={<Setting />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
