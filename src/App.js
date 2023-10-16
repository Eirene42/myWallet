import React, { useState } from 'react';
import './App.css';
import AddTransaction from './transaction/addTransaction';
import TransactionHistory from './transaction/transactionHistory';
import Balance from './transaction/balance';

function App() {

  const [transactions, setTransactions] = useState([]);
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionType, setTransactionType] = useState('income');
  const [selectedMenu, setSelectedMenu] = useState('addTransaction');

  const handleTransactionSubmit = () => {
    const newTransaction = {
      name: transactionName,
      amount: parseFloat(transactionAmount),
      type: transactionType,
    };

    setTransactions([...transactions, newTransaction]);
    setTransactionName('');
    setTransactionAmount('');
  };

  return (
    <div className="App">
      <h1>Income and Expense Management</h1>
      <div>
        <ul className="menu">
          <li onClick={() => setSelectedMenu('addTransaction')}>Add Transaction</li>
          <li onClick={() => setSelectedMenu('transactionHistory')}>Transaction History</li>
          <li onClick={() => setSelectedMenu('balance')}>Balance</li>
        </ul>
      </div>
      <div>
        {selectedMenu === 'addTransaction' && (
          <AddTransaction
            transactionName={transactionName}
            setTransactionName={setTransactionName}
            transactionAmount={transactionAmount}
            setTransactionAmount={setTransactionAmount}
            transactionType={transactionType}
            setTransactionType={setTransactionType}
            handleTransactionSubmit={handleTransactionSubmit}
          />
        )}

        {selectedMenu === 'transactionHistory' && (
          <TransactionHistory transactions={transactions} />
        )}

        {selectedMenu === 'balance' && (
          <Balance />
        )}
      </div>
    </div>
  );
}

export default App;
