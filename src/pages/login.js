```jsx
import React, { useState } from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/Layout/Layout';
import * as styles from './login.module.css';

const LoginPage = () => {
  const [teacherCode, setTeacherCode] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!teacherCode.trim() || !password.trim()) {
      setErrorMessage('Please enter your Teacher Code and Password.');
      return;
    }

    setErrorMessage('');

    // Temporary demo login.
    // We will connect this to real authentication later.
    navigate('/account');
  };

  return (
    <Layout disablePaddingBottom>
      <main className={styles.loginPage}>
        <section className={styles.loginCard}>
          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate('/')}
          >
            ← Back
          </button>

          <div className={styles.logoPlaceholder}>
            <span>G</span>
          </div>

          <p className={styles.schoolType}>
            GOVT. HIGHER SECONDARY SCHOOL
          </p>

          <h1>Govt. HSS Dodasan Bala</h1>

          <div className={styles.divider} />

          <h2>Teacher Diary</h2>

          <p className={styles.subtitle}>
            Teacher Login
          </p>

          {errorMessage && (
            <div className={styles.errorMessage}>
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <label htmlFor="teacherCode">
              Teacher Code
            </label>

            <input
              id="teacherCode"
              type="text"
              value={teacherCode}
              onChange={(e) => setTeacherCode(e.target.value)}
              placeholder="Enter your teacher code"
              autoComplete="username"
            />

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
            />

            <button
              type="button"
              className={styles.forgotButton}
              onClick={() => navigate('/forgot')}
            >
              Forgot Password?
            </button>

            <button
              type="submit"
              className={styles.loginButton}
            >
              Teacher Login
            </button>
          </form>

          <p className={styles.footerText}>
            Secure • Simple • Digital
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default LoginPage;
```
