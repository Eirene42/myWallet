import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SecondMenu from '../menu/secondMenu';

function AddTransaction() {
  const { email } = useParams();
  let thisEmail;

  if (thisEmail != null) {
    window.sessionStorage.setItem("key", email);
  } 
  thisEmail = sessionStorage.getItem("key");

  const [transactionData, setTransactionData] = useState({
    user: {email: thisEmail},
    name: '',
    amount: '',
    type: 'income'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransactionData({ ...transactionData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/transactions', transactionData)
      .then((response) => {
        console.log('Transaction added:', response.data);
        setTransactionData({
          name: '',
          amount: '',
          type: 'income'
        });
    })
    .catch((error) => {
      console.error('Error adding transaction:', error);
    });
  };

  return (
    <div>
      <SecondMenu email={email}/>
      <h2>Add Transaction</h2>
      <form>
        <input
          type="text"
          placeholder="Transaction Name"
          name = "name"
          value={transactionData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Transaction Amount"
          name = "amount"
          value={transactionData.amount}
          onChange={handleChange}
          required
        />
        <select
          name = "type"
          value={transactionData.type}
          onChange={handleChange}
          required
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
