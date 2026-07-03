import "./App.css";   
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Browse from "./pages/Browse";
import ReportLost from "./pages/ReportLost";
import MyReport from "./pages/MyReport";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/report" element={<ReportLost />} />
        <Route path="/my-reports" element={<MyReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;