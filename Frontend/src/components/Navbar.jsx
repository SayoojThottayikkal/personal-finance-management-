import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/auth");
  };

  return (
    <nav className="text-black p-4 flex flex-col sm:flex-row justify-between items-center gap-2 shadow shadow-fuchsia-800 bg-[#41026b]">
      <h1 className="text-xl sm:text-4xl font-bold p-2 text-white">
        Finance Manager
      </h1>

      <div className="space-x-4 text-white">
        {isLoggedIn ? (
          <>
            <Link to="/" className="hover:text-blue-300 font-bold text-lg">
              Dashboard
            </Link>
            <Link
              to="/transactions"
              className="hover:text-blue-300 font-bold text-lg"
            >
              Transactions
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-red-300 font-bold text-lg"
            >
              Logout
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
