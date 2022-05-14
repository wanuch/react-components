import React from 'react';
import styles from './Header.module.css';
import reactLogo from '../../images/react-logo.png';

const Header = () => (
  <div className={styles.Header}>
    <header>
      <nav className="nav">
        <img className="nav-logo" src={reactLogo} />
        <h1 className="nav-title">React</h1>
        <ul className="nav-items">
          <li>Content</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
