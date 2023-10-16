import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionHistory() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/transactions')
          .then((response) => {
            setTransactions(response.data);
          })
          .catch((error) => {
            console.error('Error fetching transactions:', error);
          });
      }, []);

    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id} className={transaction.type === 'income' ? 'income' : 'expense'}>
                  {transaction.name} - {transaction.type}: €{transaction.amount}
                </li>
              ))}
            </ul>
        </div>
    );
}

export default TransactionHistory;