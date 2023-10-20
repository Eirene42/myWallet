import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    job: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/users', formData)
      .then((response) => {
        console.log('Registration successful:', response.data);
        setFormData({
            name: '',
            age: '',
            job: '',
            email: '',
            password: '',
          });
      })
      .catch((error) => {
        console.error('Error during registration:', error);
      });
  };

  return (
    <div>
      <h2>Register</h2>
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
          <label htmlFor='email'>Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
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
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
