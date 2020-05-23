import React, { useEffect } from 'react';
import styles from './app.scss';
import { SwApi } from './api';

const App = () => {
  useEffect(() => {
    const swapi = new SwApi();

    swapi.getAllPeople().then((people) => {
      people.forEach((p) => {
        console.log(p.name);
      });
    });

    swapi.getPerson(5).then((p) => {
      console.log(p);
    });
  }, []);

  return (
    <div className={styles.app}>
      <header className="App-header">
        <p>Это стартовый пакет из CRA + ESLint + node-sass.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
