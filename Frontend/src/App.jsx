import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import AddTransaction from "./pages/AddTransaction";

import Transactions from "./pages/Transactions";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/addtransction" element={<AddTransaction />} />
      </Routes>
    </>
  );
}

export default App;
