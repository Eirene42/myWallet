import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from '../menu/Μenu';
import Achievements from '../extras/achievements';

function Profile() {
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        age: '',
        job: '',
        email: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:4000/users/user`, {withCredentials: true})
      .then((response) => {
        console.log('User found:', response.data);
            setPersonalInfo({
                name: response.data.name,
                age: response.data.age,
                job: response.data.job,
                email: response.data.email
            });
        })
        .catch((error) => {
            console.error('User not found:', error);
            alert("User doesn't exist!")
        });
    }, []);

    return (
        <div>
            <Menu />
            <h2>Profile</h2>
            <div className="profile-page">
                <div className="profile-card">
                    <Link to={`/edit-profile`} className="edit-link">
            ✎
                    </Link>
                    <div className="profile-container">
                    <div className="profile-image">
                        <img src="../../profile.png" alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <h1>{personalInfo.name}</h1>
                        <p>
                        <strong>Age:</strong> {personalInfo.age}
                        </p>
                        <p>
                        <strong>Job:</strong> {personalInfo.job}
                        </p>
                        <p>
                        <strong>Email:</strong> {personalInfo.email}
                        </p>
                    </div>
                    </div>
                </div>
                <div className="achievements">
                    <Achievements />
                </div>
            </div>
        </div>
    );
}

export default Profile;