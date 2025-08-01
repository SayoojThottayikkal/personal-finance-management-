import { useNavigate } from "react-router-dom";

export default function TransactionList({ transactions, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="mt-4 space-y-2">
      {transactions.map((trnctn) => (
        <div
          key={trnctn._id}
          className="bg-white p-4 shadow flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">
              <strong>Title:</strong> {trnctn.title}
            </p>
            <p>
              <strong>Category:</strong> {trnctn.category}
            </p>
            <p
              className={
                trnctn.type === "income" ? "text-green-600" : "text-red-600"
              }
            >
              <strong>Amount:</strong> ₹{trnctn.amount}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => onDelete(trnctn._id)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
            <button
              onClick={() => navigate("/addtransction", { state: trnctn })}
              className="text-blue-500 text-sm"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
