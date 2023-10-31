import React from 'react';
import './App.css';
import LoginForm from './user/login';
import BaseTransaction from './transaction/baseTransaction';
import Profile from './user/profile';
import { Route, Routes } from 'react-router-dom';
import AddTransaction from './transaction/addTransaction';
import Balance from './transaction/balance';
import TransactionHistory from './transaction/transactionHistory';
import EditProfile from './user/editProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      navigate('/');
    }
  }

  return (
    <div className="App">
      <div className='logOut'>
        <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogOut} />
      </div>
      <h1>Income and Expense Management</h1>
    <footer className="footer">
      <p>&copy; 2023 Boolean. All rights reserved.</p>
    </footer>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path='/transactions' element={<BaseTransaction />} />
        <Route path='/transactions/profile' element={<Profile />} />
        <Route path='/transactions/addTransaction' element={<AddTransaction />} />
        <Route path='/transactions/transactionHistory' element={<TransactionHistory />} />
        <Route path='/transactions/balance' element={<Balance />} />
      </Routes>
    </div>
  );
}

export default App;
