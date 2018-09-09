import React from 'react';
import styles from './styles.scss';
import Button from '../Button';


const Header = () => (
  <div className={styles.headerBg}>
    <div className={styles.headerContainer}>
      <div className={styles.mainContent}>
        <h1>pro<span>code</span> frontend <span>+</span> backend <span className={styles.span}>courses</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Harum soluta eaque
        assumenda architecto rerum?
        </p>
        <Button />
      </div>
    </div>
  </div>
);

export default Header;
