import React from 'react';
import axios from 'axios';

function AddTransaction({transactionName, setTransactionName, transactionAmount, setTransactionAmount, transactionType, setTransactionType}) {


    const sendTransactionToServer = (transactionData) => {
        axios.post('http://localhost:4000/transactions', transactionData)
          .then((response) => {
            console.log('Transaction added:', response.data);
            setTransactionName('');
            setTransactionAmount('');
            setTransactionType('income');
          })
          .catch((error) => {
            console.error('Error fetching transactions:', error);
          });
      };


  return (
    <div>
      <h2>Add Transaction</h2>
      <input
        type="text"
        placeholder="Transaction Name"
        value={transactionName}
        onChange={(e) => setTransactionName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Transaction Amount"
        value={transactionAmount}
        onChange={(e) => setTransactionAmount(e.target.value)}
      />
      <select
        value={transactionType}
        onChange={(e) => setTransactionType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button onClick={() => sendTransactionToServer({ name: transactionName, amount: transactionAmount, type: transactionType })}>Add Transaction</button>
    </div>
  );
}

export default AddTransaction;
