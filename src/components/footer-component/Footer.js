import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.Footer}>
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
