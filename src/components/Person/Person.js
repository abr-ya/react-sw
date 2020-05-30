import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './person.module.scss';

import SwApi from '../../api';
import Image from '../Image/Image';
import Loader2 from '../Loader2/Loader2';
import Error from '../Error/Error';

const Person = ({ selectedId }) => {
  // eslint-disable-next-line no-console
  console.log('Person');

  const mainClasses = [styles.person, 'card'];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('нет дополнительных данных');

  const onDataLoaded = (newData) => {
    setData(newData);
    setLoading(false);
  };

  const onError = (err) => {
    setError(true);
    setErrorMessage(err.message);
    setLoading(false);
    // eslint-disable-next-line no-console
    console.log('Ошибка получения данных в компоненте Person :', err.message);
  };

  useEffect(() => {
    const swapi = new SwApi();
    if (selectedId) {
      setLoading(true);
      swapi.getPerson(selectedId)
        .then(onDataLoaded)
        .catch(onError);
    }
  }, [selectedId]);

  return (
    <div className={mainClasses.join(' ')}>
      {// eslint-disable-next-line no-nested-ternary
        loading ? <Loader2 />
          : error ? <Error message={errorMessage} /> : <PersonView data={data} styles={styles} />
      }
    </div>
  );
};

export default Person;

// eslint-disable-next-line no-shadow
const PersonView = ({ data, styles }) => {
  const ulClasses = ['list-group', 'list-group-flush'];
  const liClasses = [styles.item, 'list-group-item'];

  return (
    <>
      {data.id && (
        <Image
          classN={styles.image}
          src={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`}
          alt="photo"
        />
      )}

      <div className="card-body">
        <h4>{data.name}</h4>
        <ul className={ulClasses.join(' ')}>
          <li className={liClasses.join(' ')}>
            <span className={styles.term}>Gender</span>
            <span>{data.gender}</span>
          </li>
          <li className={liClasses.join(' ')}>
            <span className={styles.term}>Birth Year</span>
            <span>{data.birthYear}</span>
          </li>
          <li className={liClasses.join(' ')}>
            <span className={styles.term}>Eye Color</span>
            <span>{data.eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Person.propTypes = {
  selectedId: PropTypes.string.isRequired,
};

PersonView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object.isRequired,
};
