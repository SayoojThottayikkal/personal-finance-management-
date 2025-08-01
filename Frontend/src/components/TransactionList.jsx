export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="mt-4 space-y-2">
      {transactions.map((trnctn, id) => (
        <div key={id} className="bg-white p-4 shadow flex justify-between">
          <div>
            <p className="font-semibold">{trnctn.title}</p>
            <p>{trnctn.category}</p>
          </div>
          <div className="text-right">
            <p
              className={
                trnctn.type === "income" ? "text-green-600" : "text-red-600"
              }
            >
              ₹{trnctn.amount}
            </p>
            <button
              onClick={() => onDelete(id)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
