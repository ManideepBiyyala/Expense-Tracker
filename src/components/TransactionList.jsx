import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function TransactionList() {
  const context = useContext(GlobalContext);
  const { transactions, deleteTransaction } = context;

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item) => {
          return (
            <li
              key={item.id}
              className={`${item.amount > 0 ? "plus" : "minus"}`}
            >
              {item.text}
              <span>
                {item.amount > 0
                  ? `+$${item.amount}`
                  : `-$${Math.abs(parseInt(item.amount))}`}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteTransaction(item.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TransactionList;
