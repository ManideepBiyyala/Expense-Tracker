import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .map((item) => item.amount)
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    transactions
      .map((item) => item.amount)
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpense;
