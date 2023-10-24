import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EditProfile() {
    const { email } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        job: '',
        password: ''
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:4000/users/edit-profile/${email}`, formData)
        .then((response) => {
        console.log('Updating successful:', response.data);
        setFormData({
            name: '',
            age: '',
            job: '',
            password: '',
            });
        })
        .catch((error) => {
        console.error('Error during updating:', error);
        });
    };

    return (
    <div>
        <h2>Update your personal info</h2>
        <form>
        <div>
            <label htmlFor="name">Name</label>
            <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor='age'>Age</label>
            <input
            type="number"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor='job'>Job</label>
            <input
            type="text"
            placeholder="Job"
            name="job"
            value={formData.job}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            />
        </div>
        <button type="submit" onClick={handleSubmit}>Update</button>
        </form>
    </div>
    );
}

export default EditProfile;