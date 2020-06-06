import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './item.module.scss';

import SwApi from '../../api';
import Image from '../Image/Image';
import Loader2 from '../Loader2/Loader2';
import Error from '../Error/Error';

const Item = ({ typeData, selectedId }) => {
  // eslint-disable-next-line no-console
  console.log('Item', typeData, selectedId);

  const mainClasses = [styles.person, 'card'];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('нет дополнительных данных');

  const onDataLoaded = (newData) => {
    console.log('newData:', newData);
    setData(newData);
    setLoading(false);
  };

  const onError = (err) => {
    setError(true);
    setErrorMessage(err.message);
    setLoading(false);
    // eslint-disable-next-line no-console
    console.log('Ошибка получения данных в компоненте Item :', err.message);
  };

  useEffect(() => {
    const swapi = new SwApi();
    if (typeData && selectedId) {
      setLoading(true);
      const getterName = `get${typeData}`;
      console.log('getterName', getterName);
      swapi[getterName](selectedId)
        .then(onDataLoaded)
        .catch(onError);
    }
  }, [typeData, selectedId]);

  const ProviderComponent = ({ td, d, s }) => {
    if (td === 'Person') return <PersonView data={d} styles={s} />;
    if (td === 'Planet') return <PlanetView data={d} styles={s} />;

    return `Передан неизвестный typeData (${td})!`;
  };

  return (
    <div className={mainClasses.join(' ')}>
      {// eslint-disable-next-line no-nested-ternary
        !selectedId ? ('для детализации нужно выбрать что-то в списке слева')
          // eslint-disable-next-line no-nested-ternary
          : loading ? <Loader2 />
            : error ? <Error message={errorMessage} />
              : <ProviderComponent td={typeData} d={data} s={styles} />
      }
    </div>
  );
};

export default Item;

Item.propTypes = {
  typeData: PropTypes.string.isRequired,
  selectedId: PropTypes.string.isRequired,
};


// eslint-disable-next-line no-shadow
const PersonView = ({ data, styles }) => {
  const ulClasses = ['list-group', 'list-group-flush'];
  const liClasses = [styles.item, 'list-group-item'];

  return (
    <>
      <div className={styles.imageWrapper}>
        {data.id && (
          <Image
            classN={styles.image}
            src={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`}
            alt="photo"
          />
        )}
      </div>

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

PersonView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object.isRequired,
};


// eslint-disable-next-line no-shadow
const PlanetView = ({ data, styles }) => {
  const ulClasses = ['list-group', 'list-group-flush'];
  const liClasses = [styles.item, 'list-group-item'];

  return (
    <>
      <div className={styles.imageWrapper}>
        {data.id && (
          <Image
            classN={styles.image}
            src={`https://starwars-visualguide.com/assets/img/planets/${data.id}.jpg`}
            alt="planet"
          />
        )}
      </div>

      <div className="card-body">
        <h4>{data.name}</h4>
        <ul className={ulClasses.join(' ')}>
          <li className={liClasses.join(' ')}>
            <span className={styles.term}>Population</span>
            <span>{data.population}</span>
          </li>
          <li className={liClasses.join(' ')}>
            <span className={styles.term}>Rotation Period</span>
            <span>{data.rotationPeriod}</span>
          </li>
          <li className={liClasses.join(' ')}>
            <span className={styles.term}>Diameter</span>
            <span>{data.diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

PlanetView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object.isRequired,
};
