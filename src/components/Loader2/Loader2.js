import React from 'react';
import classes from './loader2.module.scss';
import './loader2.scss';

const Loader2 = () => (
  <div className={classes.center}>
    <div className="lds-css">
      <div className="lds-double-ring">
        <div />
        <div />
      </div>
    </div>
  </div>
);

export default Loader2;
