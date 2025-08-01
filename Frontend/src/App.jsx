import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import AddTransaction from "./pages/AddTransaction";
import Transactions from "./pages/Transactions";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <Transactions />
            </PrivateRoute>
          }
        />
        <Route
          path="/addtransction"
          element={
            <PrivateRoute>
              <AddTransaction />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
