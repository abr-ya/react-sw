import React from 'react';
import styles from './app.module.scss';
// import SwApi from './api';

import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import List from './components/List/List';
import Person from './components/Person/Person';

const App = () => {
  const mainClasses = [styles.app, 'container'];

  // useEffect(() => {
  //   const swapi = new SwApi();

  //   swapi.getAllPeople().then((people) => {
  //     people.forEach((p) => {
  //       console.log(p.name);
  //     });
  //   });

  //   swapi.getPerson(5).then((p) => {
  //     console.log(p);
  //   });
  // }, []);

  return (
    <div className={mainClasses.join(' ')}>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <List />
        </div>
        <div className="col-md-6">
          <Person />
        </div>
      </div>
    </div>
  );
};

export default App;
