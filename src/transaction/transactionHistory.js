import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionHistory() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/transactions').then((response) => {
            setTransactions(response.data);
          })
          .catch((error) => {
            console.error('Error fetching transactions:', error);
          });
      }, []);

      const handleDeleteTransaction = (id) => {
          axios.delete(`http://localhost:4000/transactions/${id}`).then((response) => {
            setTransactions(response.data);

          axios.get('http://localhost:4000/transactions').then((response) => {
            setTransactions(response.data);
          })
          .catch((error) => {
            console.error('Error fetching transactions:', error);
          });
        })
        .catch((error) => {
          console.error('Error deleting transaction:', error);
        });
      }

      return (
        <div>
          <h2>Transaction History</h2>
          {Array.isArray(transactions) && transactions.length > 0 ? (
            <ul>
              {transactions.map((transaction) => (
                <div key={transaction.id}>
                  <li className={transaction.type === 'income' ? 'income' : 'expense'}>
                    {transaction.name} - {transaction.type}: €{transaction.amount}
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
        </div>
      );
}

export default TransactionHistory;