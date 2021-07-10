import React from 'react';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>React app</h1>
        <h2 className={styles.subtitle}>Subtitle</h2>
      </main>
    )
  }
}

export default App;