import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className=" text-black p-4 flex flex-col sm:flex-row justify-between items-center gap-2 shadow shadow-fuchsia-800 bg-[#41026b];
] "
    >
      <h1 className="text-xl sm:text-4xl font-bold  p-2">Finance Manager</h1>
      <div className="space-x-4 text-black ">
        <Link to="/" className="hover:text-blue-900 font-bold text-lg">
          Dashboard
        </Link>

        <Link
          to="/transactions"
          className="hover:text-blue-900 font-bold text-lg"
        >
          Transactions
        </Link>

        <Link to="/auth" className="hover:text-blue-900 font-bold text-lg">
          Login
        </Link>

        {/* <Link
          to="/addtransction"
          className="hover:text-blue-900 font-bold text-lg"
        >
          AddTransaction
        </Link> */}
      </div>
    </nav>
  );
}
