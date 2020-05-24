import React from 'react';
import styles from './list.module.scss';

const List = () => {
  // eslint-disable-next-line no-console
  console.log('List');
  const ulClasses = [styles.listGroup, 'list-group', 'item-list'];
  const liClasses = [styles.listGroupItem, 'list-group-item'];

  return (
    <ul className={ulClasses.join(' ')}>
      <li className={liClasses.join(' ')}>
        Luke Skywalker
      </li>
      <li className={liClasses.join(' ')}>
        Darth Vader
      </li>
      <li className={liClasses.join(' ')}>
        R2-D2
      </li>
    </ul>
  );
};

export default List;
