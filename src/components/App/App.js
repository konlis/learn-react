import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import PropTypes from 'prop-types';

class App extends React.Component {
    static propTypes = {
title: PropTypes.node,
}
  render() {
    return (
        <main className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
          <List title={['Things to do ', <sup key='1'>soon!</sup>]}
           image={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}
           item={10}
           columns={[{title:'Animals'}, {title:'Plants'}, {title:'Minerals'}]}
           >
          </List>

        </main>
    )
  }
}

export default App;
