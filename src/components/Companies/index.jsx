import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Button from '../Button';


import comp1 from './imgs/ciklum.png';
import comp2 from './imgs/DataArt.png';
import comp3 from './imgs/epam.png';
import comp4 from './imgs/GlobalLogic.png';
import comp5 from './imgs/infopulse.png';
import comp6 from './imgs/nettracker.png';
import comp7 from './imgs/nix.png';
import comp8 from './imgs/sigma.png';
import comp9 from './imgs/softserve.png';
import comp10 from './imgs/vipDesign.png';

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
    comp1,
    comp2,
    comp3,
    comp4,
    comp5,
    comp6,
    comp7,
    comp8,
    comp9,
    comp10,
  ],
};

export default Companies;
