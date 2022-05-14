import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContent.module.css';

const MainContent = () => (
  <div className={styles.MainContent}>
    <h1>Reasons I'm excited to learn React</h1>
    <ol>
      <li>It's a popular library, so I'll be
        able to fit in with the cool kids!</li>
      <li>I'm more likely to get a job as a developer
        if I know React</li>
    </ol>
  </div>
);

MainContent.propTypes = {};

MainContent.defaultProps = {};

export default MainContent;
