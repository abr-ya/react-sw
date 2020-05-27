import React from 'react';
import styles from './error.module.scss';
import icon from './bug.png';

// eslint-disable-next-line react/prop-types
const ErrorIndicator = ({ message }) => (
  <div className={styles.indicator}>
    <div>
      <img src={icon} alt="error icon" />
    </div>
    <div>
      <span className={styles.boom}>BOOM! </span>
      <span>something has gone terribly wrong </span>
      <span>(but we already sent droids to fix it) </span>
    </div>
    <div>
      <span style={{ color: 'red' }}>
        {`подробнее: ${message}`}
      </span>
    </div>
  </div>
);

export default ErrorIndicator;
