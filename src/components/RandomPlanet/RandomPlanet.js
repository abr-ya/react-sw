import React from 'react';
import styles from './randomPlanet.module.scss';

const RandomPlanet = () => {
  // eslint-disable-next-line no-console
  console.log('RandomPlanet');
  const mainClasses = [styles.randomPlanet, 'jumbotron', 'rounded'];
  const ulClasses = [styles.group, 'list-group', 'list-group-flush'];
  const liClasses = [styles.item, 'list-group-item'];

  return (
    <div className={mainClasses.join(' ')}>
      <img
        className={styles.image}
        src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
        alt="planet"
      />
      <div>
        <h4>Planet Name</h4>
        <ul className={ulClasses.join(' ')}>
          <li className={liClasses.join(' ')}>
            <span className="term">Population</span>
            <span>123124</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>43</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomPlanet;
