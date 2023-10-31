import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from '../menu/Μenu';

function TransactionHistory() {

  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {

    axios.get(`http://localhost:4000/transactions/get}`, {withCredentials: true}).then((response) => {
      setTransactions(response.data);
    }).catch((error) => {
      console.error('Error fetching transactions:', error);
    });
  };

  const handleDeleteTransaction = (id) => {
      axios.delete(`http://localhost:4000/transactions/${id}`, {withCredentials: true}).then((response) => {
        setTransactions(response.data);
      fetchTransactions();
    })
    .catch((error) => {
      console.error('Error deleting transaction:', error);
    });
  }

  useEffect(() => {
    axios.get(`http://localhost:4000/transactions/get`, {withCredentials: true}).then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
    });
  }, []);


  const exportTransactions = () => {
    const csv = transactions.map(transaction => Object.values(transaction).join(', ')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'transactions.csv';
    a.dispatchEvent(new MouseEvent('click'));
    window.URL.revokeObjectURL(a.href);
  }


  return (
    <div>
      <Menu />
      <h2>Transaction History</h2>
      {Array.isArray(transactions) && transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <div key={transaction.id} className='history-container'>
              <li className={transaction.type === 'income' ? 'income' : 'expense'}>
                {transaction.name} - {transaction.type}:{transaction.amount} €
              </li>
              <button
                className="delete-button"
                onClick={() => handleDeleteTransaction(transaction.id)}>&#x2716;
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p>No transactions available...</p>
      )}
      <div class="export-button-container">
        <button id="export-button" onClick={exportTransactions}>Export Transactions</button>
      </div>
    </div>
  );
}

export default TransactionHistory;