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


  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


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
      <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <span className="menu-icon">☰</span>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
            <span onClick={() => setSelectedMenu('addTransaction')}>Add Transaction</span>
            <span onClick={() => setSelectedMenu('transactionHistory')}>Transaction History</span>
            <span onClick={() => setSelectedMenu('balance')}>Balance</span>
        </div>
      )}
    </div>
      <h1>Income and Expense Management</h1>
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
