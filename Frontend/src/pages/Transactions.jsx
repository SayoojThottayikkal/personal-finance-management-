import TransactionList from "../components/TransactionList";
import FilterBar from "../components/FilterBar";
import { Link } from "react-router-dom";

export default function Transactions() {
  // const [transactions, setTransactions] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <h1 className="text-2xl font-bold mb-4">All Transactions</h1>

        <Link to="/addtransction">
          <button className="text-white">AddTransaction </button>
        </Link>
      </div>
      {/* <FilterBar */}
      {/* <TransactionList  */}
    </div>
  );
}
