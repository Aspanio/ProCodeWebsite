import React from 'react';
import styles from './styles.scss';
import Button from '../Button';


const Header = () => (
  <div className={styles.headerBg}>
    <div className={styles.headerContainer}>
      <div className={styles.mainContent}>
        <h1>pro<span>code</span> frontend <span>+</span> backend <span className={styles.span}>courses</span></h1>
        <p>Практический курс программирования с нуля до продвинутого, путь к будущей профессии</p>
        <Button />
      </div>
    </div>
  </div>
);

export default Header;
