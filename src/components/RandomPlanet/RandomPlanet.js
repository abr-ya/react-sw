import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './randomPlanet.module.scss';

import SwApi from '../../api';
import Image from '../Image/Image';
import Loader2 from '../Loader2/Loader2';

const RandomPlanet = () => {
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      const swapi = new SwApi();
      swapi.getPlanet(id).then(onPlanedLoaded); // так аккуратнее
    }
  }, [id]);

  const mainClasses = [styles.randomPlanet, 'jumbotron', 'rounded'];

  return (
    <div className={mainClasses.join(' ')}>
      {loading ? <Loader2 /> : <Planet data={data} styles={styles} />}
    </div>
  );
};

export default RandomPlanet;

// eslint-disable-next-line no-shadow
const Planet = ({ data, styles }) => {
  const ulClasses = [styles.group, 'list-group', 'list-group-flush'];
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
    </>
  );
};

Planet.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object.isRequired,
};
