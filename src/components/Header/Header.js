/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const Header = ({ setTypeData, setSelectedId }) => {
  // eslint-disable-next-line no-console
  console.log('Header');
  const mainClasses = [styles.header, '', ''];

  const setter = (typeData) => {
    setSelectedId('');
    setTypeData(typeData);
  };

  return (
    <div className={mainClasses.join(' ')}>
      <h3>Star DB</h3>
      <ul className="d-flex">
        <li onClick={() => setter('Person')}>
          People
        </li>
        <li onClick={() => setter('Planet')}>
          Planets
        </li>
        <li onClick={() => setter('Ship')}>
          Starships
        </li>
      </ul>
    </div>
  );
};

export default Header;

Header.propTypes = {
  setTypeData: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};
