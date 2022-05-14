import React from 'react';
import styles from './Header.module.css';
import reactLogo from '../../images/react-logo.png';

const Header = () => (
  <div className={styles.Header}>
    <header>
      <nav className="nav">
        <img className="nav-logo" src={reactLogo} />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
