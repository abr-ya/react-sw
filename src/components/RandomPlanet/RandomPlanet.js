import React, { useState, useEffect } from 'react';
import styles from './randomPlanet.module.scss';

import SwApi from '../../api';
import Image from '../Image/Image';

const RandomPlanet = () => {
  const [id, setId] = useState(0);
  const [data, setData] = useState({
    id: null,
    name: '...load',
    population: '...load',
    rotationPeriod: '...load',
    diameter: '...load',
  });

  useEffect(() => {
    setId(Math.floor(Math.random() * 25) + 1);
  }, []);

  const onPlanedLoaded = (planet) => {
    setData(planet);
  };

  useEffect(() => {
    if (id) {
      const swapi = new SwApi();
      swapi.getPlanet(id).then(onPlanedLoaded); // так аккуратнее
    }
  }, [id]);

  const mainClasses = [styles.randomPlanet, 'jumbotron', 'rounded'];
  const ulClasses = [styles.group, 'list-group', 'list-group-flush'];
  const liClasses = [styles.item, 'list-group-item'];

  return (
    <div className={mainClasses.join(' ')}>
      <div className={styles.imageWrapper}>
        {id && (
          <Image
            classN={styles.image}
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="planet"
          />
        )}
      </div>

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
