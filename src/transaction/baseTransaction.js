import React, { useState } from 'react';
import AddTransaction from './addTransaction'
import TransactionHistory from './transactionHistory';
import Balance from './balance';
import Profile from '../user/profile';
import { Link, Route, Routes, useParams } from 'react-router-dom';

function BaseTransaction() {

  const [transactions, setTransactions] = useState([]);
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionType, setTransactionType] = useState('income');
  
  const { email } = useParams();

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
            <span><Link to="/:email/transactions/profile">Profile</Link></span>
            <span><Link to="/:email/transactions/addTransaction">Add Transaction</Link></span>
            <span><Link to="/:email/transactions/transactionHistory">Transaction History</Link></span>
            <span><Link to="/:email/transactions/Balance">Balance</Link></span>
        </div>
      )}
    </div>
      <Routes>
        <Route path='/:email/transactions/profile' element={<Profile/>}/>
        <Route path='/:email/transactions/addTransaction' element={<AddTransaction
              transactionName={transactionName}
              setTransactionName={setTransactionName}
              transactionAmount={transactionAmount}
              setTransactionAmount={setTransactionAmount}
              transactionType={transactionType}
              setTransactionType={setTransactionType}
              handleTransactionSubmit={handleTransactionSubmit}/>}/>
      
      <Route path='/:email/transactions/transactionHistory' element={<TransactionHistory transactions={transactions}/>}/>
      <Route path='/:email/transactions/Balance' element={<Balance/>}/>
      </Routes>
    </div>
  );
}

export default BaseTransaction;
