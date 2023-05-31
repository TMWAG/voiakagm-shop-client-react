import React from 'react';
import styles from './Home.module.css';
import TopPromoted from './Promoted/TopPromoted';
import Categories from './Categories/Categories';

const Home = (): JSX.Element => {
  return (
    <main className={styles.home}>
      home
      <TopPromoted />
      <Categories />
    </main>
  );
};

export default Home;
