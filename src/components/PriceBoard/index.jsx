import React from 'react';
import styles from './styles.scss';
import PriceCard from '../PriceCard';

const PriceBoard = () => (
  <div className={styles.priceBoardBg}>
    <div className={styles.priceBoardContainer}>
      <h1>выберите подходящий тариф обучения</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <PriceCard />
        </div>
        <div className={styles.card}>
          <PriceCard course="Базовый" price="5900" />
        </div>
      </div>
    </div>
  </div>
);

export default PriceBoard;
