import axios from 'axios';
import React, { useState } from 'react';
import Menu from '../menu/Μenu';

function EditProfile() {
    const [formData, setFormData] = useState({
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

    if (formData.age === '' || formData.job === '' || formData.password === '') {
        alert('All fields are required.');
        return;
      }

    axios.put(`http://localhost:4000/users/edit-profile`, formData, {withCredentials: true})
        .then((response) => {
        console.log('Updating successful:', response.data);
        alert("Updating done successfully!")
        setFormData({
            age: '',
            job: '',
            password: '',
            });
        })
        .catch((error) => {
        console.error('Error during updating:', error);
        alert("Updating failed!")
        });
    };

    return (
    <div>
        <Menu />
        <h2>Update your personal info</h2>
        <form>
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