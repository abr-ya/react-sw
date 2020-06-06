/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './list.module.scss';

import SwApi from '../../api';
import Loader2 from '../Loader2/Loader2';
import Error from '../Error/Error';

const List = ({ selectHandler, typeData }) => {
  // eslint-disable-next-line no-console
  console.log('List:', typeData);
  const ulClasses = [styles.listGroup, 'list-group', 'item-list'];
  const liClasses = [styles.listGroupItem, 'list-group-item'];

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
    console.log('Ошибка получения данных в компоненте List :', err.message);
  };

  const itemClickHandler = (id) => {
    selectHandler(id);
  };

  useEffect(() => {
    const swapi = new SwApi();
    const getterName = `getAll${typeData}s`;
    console.log('getterName', getterName);
    swapi[getterName]()
      .then(onDataLoaded) // так аккуратнее - вынести в отдельную функцию
      .catch(onError);
  }, [typeData]);

  // преобразуем данные в jsx
  const renderItems = (arr) => (
    arr ? arr.map(({ id, name }) => (
      <li
        className={liClasses.join(' ')}
        key={id}
        onClick={() => itemClickHandler(id)}
      >
        {name}
      </li>
    )) : null
  );

  return (
    <ul className={ulClasses.join(' ')}>
      {// eslint-disable-next-line no-nested-ternary
        loading ? <Loader2 />
          : error ? <Error message={errorMessage} /> : renderItems(data)
      }
    </ul>
  );
};

export default List;

List.propTypes = {
  selectHandler: PropTypes.func.isRequired,
  typeData: PropTypes.string.isRequired,
};
