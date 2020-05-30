import React, { useState } from 'react';
import styles from './app.module.scss';

import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import List from './components/List/List';
import Person from './components/Person/Person';

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState('');

  const mainClasses = [styles.app, 'container'];

  return (
    <div className={mainClasses.join(' ')}>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <List selectHandler={setSelectedPerson} />
        </div>
        <div className="col-md-6">
          <Person selectedId={selectedPerson} />
        </div>
      </div>
    </div>
  );
};

export default App;
