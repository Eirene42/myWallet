import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faPiggyBank, faShoppingCart ,faSync, faBriefcase, faChartPie, faBalanceScale, faRuler } from '@fortawesome/free-solid-svg-icons';

function FinancialTips() {
    const tips = [
        { text: 'Automate your savings to make it a consistent habit.', icon: faRuler   },
        { text: 'Create an emergency fund with at least three to six months of living expenses.', icon: faPiggyBank },
        { text: 'Set financial goals to stay motivated and focused on your objectives.', icon: faBullseye },
        { text: 'Avoid impulse purchases and stick to a shopping list.', icon: faShoppingCart },
        { text: 'Review and update your budget regularly to adapt to changes.', icon: faSync },
        { text: 'Take advantage of employer-sponsored retirement plans.', icon: faBriefcase },
        { text: 'Diversify your investments to spread risk and increase returns.', icon: faChartPie },
        { text: 'Avoid taking on too much debt and keep your credit utilization low.', icon: faBalanceScale },
    ];

  return (
    <div className="financial-tips-container">
      <h2>Financial Tips and Advice</h2>
      <ul className="tips-list">
        {tips.map((tip, index) => (
          <li key={index}>
            <div className="tip-icon">
              <FontAwesomeIcon icon={tip.icon} />
            </div>
            <div className="tip-text">
              <p>{tip.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FinancialTips;
