import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', form);
    // You can integrate API logic here
  };

  return (
    <>
     <div className="ctsm-bg-img-about">
  <img src="assets/images/img89.jpg" className="cstm-img-banner" />
  <div className="overlay"></div>
</div>
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="login-input email-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="login-input email-input"
        />
        <Link to="/profile" className='cstm-login-link w-100'>
        <button type="submit" className="login-button w-100">Sign In</button>
        </Link>
        <div className="login-links">
          <a href="/forgot-password">Forgot your password?</a>
          <Link to="/register">Create account</Link>
        
        </div>
      </form>
    </div>
    </>
  );
}

export default Login;
