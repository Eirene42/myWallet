import React from 'react';
import './App.css';
import LoginForm from './user/login';
import RegisterForm from './user/register';
import BaseTransaction from './transaction/baseTransaction';
import Profile from './user/profile';
import { Route, Routes } from 'react-router-dom';
import AddTransaction from './transaction/addTransaction';
import Balance from './transaction/balance';
import TransactionHistory from './transaction/transactionHistory';
import FirstMenu from './menu/firstMenu';

function App() {

  return (
    <div className="App">
      <FirstMenu />
      <h1>Income and Expense Management</h1>
      <Routes>
        <Route path="/" element={<h3>Welcome!</h3>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path='/:email/transactions/*' element={<BaseTransaction />} />
        <Route path='/:email/transactions/profile' element={<Profile />} />
        <Route path='/:email/transactions/addTransaction' element={<AddTransaction />} />
        <Route path='/:email/transactions/transactionHistory' element={<TransactionHistory />} />
        <Route path='/:email/transactions/balance' element={<Balance />} />
      </Routes>
    </div>
  );
}

export default App;
