import React from "react";

function Basic() {

    const cards = [
        {
            title: 'Add Transaction',
            description: 'You can add as many transactions as you want such as cash withdrawals or deposits, checks or online payments.',
            image: '../add_transaction9.jpg',
        },
        {
            title: 'Transaction History',
            description: 'You can check your transaction history each year, summarizing all of the transactions of an account during the year.',
            image: '../history.jpg',
        },
        {
            title: 'Account Balance',
            description: 'You can keep tracking of your balance representing your checking, savings, or investment account.',
            image: '../balance.jpg',
        },
    ];

    return (
        <div>
            <h3>Simplify Your Finances, Master Your Wealth!</h3>
            <p>Discover a world of financial possibilities with our account management services. We provide expert guidance and support to help you make the most of your money, achieve your financial goals, and secure your future. Take control of your finances and enjoy peace of mind with our tailored solutions.</p>
            <hr width="70%" color="#ffffff" size="3"/>
            <div className="card-row">
                {cards.map((card, index) => (
                <div className="card" key={index}>
                    <img src={card.image} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Basic;