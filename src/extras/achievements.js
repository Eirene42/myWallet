import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/achievements`, {withCredentials: true})
      .then((response) => {
        setAchievements(response.data)
      }).catch((error) => {
        console.error('Error fetching achievements:', error)
      });
  }, []);

  return (
    <div className="achievements">
    <h2>Achievements</h2>
    <div className="achievement-list">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="achievement">
          <div className='achieve-icon'>
            <FontAwesomeIcon icon={faMedal} />
          </div>
          <h4>{achievement.name}</h4>
          <p>{achievement.description}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Achievements;
