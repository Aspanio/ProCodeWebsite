import React, { Component } from 'react';
import styles from './styles.scss';

import logo from './imgs/logo.png';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { number } = this.props;
    const noSpacesNumber = number.replace(/ /g, '');
    const anchorNumber = `tel: ${noSpacesNumber}`;
    return (
      <nav style={{ backgroundColor: '#fff' }}>
        <div className={styles.container}>
          <img src={logo} alt="PROCODE" className={styles.logo} />
          <a href={anchorNumber} /><h3>{number}</h3>
        </div>
      </nav>
    );
  }
}

Topbar.defaultProps = {
  number: '+380 97 172 8774',
};

export default Topbar;
