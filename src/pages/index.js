```jsx
import * as React from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/Layout/Layout';

import * as styles from './index.module.css';

const IndexPage = () => {
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <Layout disablePaddingBottom>
      <main className={styles.welcomePage}>
        <section className={styles.welcomeCard}>
          <div className={styles.logoPlaceholder}>
            <span>G</span>
          </div>

          <p className={styles.schoolType}>GOVT. HIGHER SECONDARY SCHOOL</p>

          <h1>Govt. HSS Dodasan Bala</h1>

          <div className={styles.divider} />

          <h2>Teacher Diary</h2>

          <p className={styles.subtitle}>
            Digital Lesson &amp; Teaching Record
          </p>

          <button
            type="button"
            className={styles.loginButton}
            onClick={goToLogin}
          >
            Teacher Login
          </button>

          <p className={styles.footerText}>
            Secure • Simple • Digital
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
```
