import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("0");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000), //you can use uuid
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">
            <strong>Text</strong>
          </label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text here..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <strong>Amount</strong> <br /> (negative - expense, positive -
            income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount here..."
            required
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
