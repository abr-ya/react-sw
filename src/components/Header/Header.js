import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  // eslint-disable-next-line no-console
  console.log('Header');
  const mainClasses = [styles.header, '', ''];

  return (
    <div className={mainClasses.join(' ')}>
      <h3>
        <a href=".">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href=".">People</a>
        </li>
        <li>
          <a href=".">Planets</a>
        </li>
        <li>
          <a href=".">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
