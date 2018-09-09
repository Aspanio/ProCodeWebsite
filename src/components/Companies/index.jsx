import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Button from '../Button';


import company1 from './imgs/ciklum.png';
import company2 from './imgs/dataArt.png';
import company3 from './imgs/epam.png';
import company4 from './imgs/globalLogic.png';
import company5 from './imgs/infopulse.png';
import company6 from './imgs/nettracker.png';
import company7 from './imgs/nix.png';
import company8 from './imgs/sigma.png';
import company9 from './imgs/softserve.png';
import company10 from './imgs/vipDesign.png';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { companies } = this.props;
    const items = companies.map(el => <img key={uuidv4()} src={el} alt="#" />);
    return (
      <div className={styles.compBg}>
        <div className={styles.compContainer}>
          <h1>компании в которых работают наши выпускники</h1>
          <div className={styles.companies}>{items}</div>
          <Button />
        </div>
      </div>
    );
  }
}

Companies.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.string),
};

Companies.defaultProps = {
  companies: [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
    company9,
    company10,
  ],
};

export default Companies;
