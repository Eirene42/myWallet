import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import SecondMenu from '../menu/secondMenu';

function Profile() {
    const { email } = useParams();
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        age: '',
        job: '',
        email: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:4000/users/${email}`)
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
        });
    }, [email]);

    return (
        <div>
            <SecondMenu email={email}/>
            <h2>Profile</h2>
            <Link to={`/edit-profile/${email}`} className="edit-link">✎</Link>
            <div className="profile-container">
                <div className="profile-image">
                <img
                    src="../../profile.png"
                    alt="Profile"
                />
                </div>
                <div className="profile-info">
                <h1>{personalInfo.name}</h1>
                <p>
                    <strong>Email:</strong> {personalInfo.email}
                </p>
                <p>
                    <strong>Age:</strong> {personalInfo.age}
                </p>
                <p>
                    <strong>Job:</strong> {personalInfo.job}
                </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;