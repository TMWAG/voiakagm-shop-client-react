import React from 'react';
import styles from './Home.module.css';
// import TopPromoted from './Promoted/TopPromoted';
import Categories from './Categories/Categories';
import InfoBlock from './InfoBlock/InfoBlock';

const Home = (): JSX.Element => {
  return (
    <main className={styles.home}>
      {/* <TopPromoted /> */}
      <InfoBlock />
      <Categories />
    </main>
  );
};

export default Home;
