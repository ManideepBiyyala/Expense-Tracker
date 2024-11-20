import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const context = useContext(GlobalContext);
  const { addTransaction } = context;
  const [formData, setFormData] = useState({
    text: "",
    amount: 0,
  });
  const { text, amount } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  // const [text, setText] = useState("");
  // const [amount, setAmount] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setFormData({ text: "", amount: "" });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            // onChange={(e) => setText(e.target.value)}
            onChange={handleChange}
            name="text"
            type="text"
            id="text"
            value={text}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            name="amount"
            onChange={handleChange}
            // onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
