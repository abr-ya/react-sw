import React, { useState, useEffect } from 'react';
import styles from './app.module.scss';

import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import List from './components/List/List';
import Item from './components/Item/Item';

const App = () => {
  const [typeData, setTypeData] = useState('Person');
  const [selectedId, setSelectedId] = useState('');

  const mainClasses = [styles.app, 'container'];

  useEffect(() => {
    console.log('App []');
  }, []);

  return (
    <div className={mainClasses.join(' ')}>
      <Header setTypeData={setTypeData} setSelectedId={setSelectedId} />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <List selectHandler={setSelectedId} typeData={typeData} />
        </div>
        <div className="col-md-6">
          <Item selectedId={selectedId} typeData={typeData} />
        </div>
      </div>
    </div>
  );
};

export default App;
