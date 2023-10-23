import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SecondMenu from '../menu/secondMenu';

function TransactionHistory() {
  const { email } = useParams();

  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = () => {
    axios.get(`http://localhost:4000/transactions/${email}`).then((response) => {
      setTransactions(response.data);
    }).catch((error) => {
      console.error('Error fetching transactions:', error);
    });
  };

  const handleDeleteTransaction = (id) => {
      axios.delete(`http://localhost:4000/transactions/${id}`).then((response) => {
        setTransactions(response.data);
      fetchTransactions();
    })
    .catch((error) => {
      console.error('Error deleting transaction:', error);
    });
  }

  useEffect(() => {
    axios.get(`http://localhost:4000/transactions/${email}`).then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
    }, [email]);

  return (
    <div>
      <SecondMenu email={email}/>
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
    </div>
  );
}

export default TransactionHistory;