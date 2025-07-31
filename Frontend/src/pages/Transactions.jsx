import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import FilterBar from "../components/FilterBar";

export default function Transactions() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <FilterBar />
      <TransactionForm />
      <TransactionList />
    </div>
  );
}
