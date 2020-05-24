import React, { useState, useEffect } from 'react';
import styles from './randomPlanet.module.scss';

import SwApi from '../../api';

const RandomPlanet = () => {
  const [data, setData] = useState({
    id: null,
    name: '...load',
    population: '...load',
    rotationPeriod: '...load',
    diameter: '...load',
  });

  useEffect(() => {
    setData({
      ...data,
      id: Math.floor(Math.random() * 25) + 1,
    });
  // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const swapi = new SwApi();

    if (data.id) {
      swapi.getPlanet(data.id).then((p) => {
        setData({
          ...data,
          name: p.name,
          population: p.population,
          rotationPeriod: p.rotation_period,
          diameter: p.diameter,
        });
      });
    }
  // eslint-disable-next-line
  }, [data.id]);

  const mainClasses = [styles.randomPlanet, 'jumbotron', 'rounded'];
  const ulClasses = [styles.group, 'list-group', 'list-group-flush'];
  const liClasses = [styles.item, 'list-group-item'];

  return (
    <div className={mainClasses.join(' ')}>
      {data.id && (
        <img
          className={styles.image}
          src={`https://starwars-visualguide.com/assets/img/planets/${data.id}.jpg`}
          alt="planet"
        />
      )}

      <div>
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
    </div>
  );
};

export default RandomPlanet;
