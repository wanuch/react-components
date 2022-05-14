import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => (
  <div className={styles.MainContent}>
    <main className="main-facts">
      <h1>Fun facts about React</h1>
      <ul className="facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  </div>
);

export default MainContent;
