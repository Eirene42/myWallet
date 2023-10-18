import axios from 'axios';
import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = formData;

    axios.post(`http://localhost:4000/users/login`, {email, password})
      .then((response) => {
        console.log('Logged in successfully:', response.data);
        setFormData({
          email: '',
          password: ''
        });
        window.location.href = `/${formData.email}/transactions`;
      })
    .catch((error) => {
        console.error('Loggin failed:', error);
        });
  };

  return (
    <div>
        <h2>Login</h2>
        <form>
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button type="submit" onClick={handleLogin}>Login</button>
        </form>
    </div>
  );
}

export default LoginForm;