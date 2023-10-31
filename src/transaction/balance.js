import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from '../menu/Μenu';
import FinancialTips from '../extras/financialTips';

function Balance() {

    const [transactions, setTransactions] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [balance, setBalance] = useState(0);

    const fetchTransactions = () => {
        axios.get(`http://localhost:4000/transactions/get`, {withCredentials: true}).then((response) => {
          setTransactions(response.data);
        }).catch((error) => {
          console.error('Error fetching transactions:', error);
        });
      };

    const calculateBalance = () => {
    const income = transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((total, transaction) => total + transaction.amount, 0);
    setIncomes(+income);

    const expenses = transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce((total, transaction) => total + transaction.amount, 0);
    setExpenses(+expenses);

    setBalance(income - expenses);
    };

    useEffect(() => {
        fetchTransactions();
    });

    useEffect(() => {
        calculateBalance();
    });

    return (
        <div>
          <Menu />
          <h2>Balance</h2>
          <div className='balance-container'>
            <div className='balance-part'>
                <p className={`balance ${balance < 0 ? 'negative' : ''}`}>
                    Your current balance: {balance} €
                </p>
                <p className="stats">
                    {incomes} € incomes / {expenses} € expenses
                </p>
            </div>
          <FinancialTips/>
          </div>
        </div>
      );
}
export default Balance;