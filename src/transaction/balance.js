import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SecondMenu from '../menu/secondMenu';

function Balance() {
    const { email } = useParams();

    const [transactions, setTransactions] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [balance, setBalance] = useState(0);

    const fetchTransactions = () => {
        axios.get(`http://localhost:4000/transactions/${email}`).then((response) => {
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
            <SecondMenu email={email}/>
            <h2>Balance</h2>
            <p>Your current balance: {balance} €</p>
            <p>{incomes} € incomes / {expenses} € expenses</p>
        </div>
    );
}
export default Balance;