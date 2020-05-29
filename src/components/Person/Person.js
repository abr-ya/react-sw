import React from 'react';
import PropTypes from 'prop-types';
import styles from './person.module.scss';

const Person = ({ selectedId }) => {
  // eslint-disable-next-line no-console
  console.log('Person');
  const mainClasses = [styles.person, 'card'];
  const ulClasses = ['list-group', 'list-group-flush'];
  const liClasses = [styles.item, 'list-group-item'];

  return (
    <div className={mainClasses.join(' ')}>
      <img
        className={styles.image}
        src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
        alt=""
      />

      <div className="card-body">
        <h4>{`R2-D2 ${selectedId}`}</h4>
        <ul className={ulClasses.join(' ')}>
          <li className={liClasses.join(' ')}>
            <span className={styles.term}>Gender</span>
            <span>male</span>
          </li>
          <li className={liClasses.join(' ')}>
            <span className={styles.term}>Birth Year</span>
            <span>43</span>
          </li>
          <li className={liClasses.join(' ')}>
            <span className={styles.term}>Eye Color</span>
            <span>red</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Person;

Person.propTypes = {
  selectedId: PropTypes.string.isRequired,
};
