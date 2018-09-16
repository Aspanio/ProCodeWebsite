import React from 'react';
import styles from './styles.scss';

import logo from './imgs/logo.png';

const Topbar = () => (
  <nav style={{ backgroundColor: '#fff' }}>
    <div className={styles.container}>
      <img src={logo} alt="PROCODE" className={styles.logo} />
      <h3>8 800 505-72-45</h3>
    </div>
  </nav>
);

export default Topbar;
