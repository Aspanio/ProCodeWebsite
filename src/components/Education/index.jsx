import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Button from '../Button';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rawPlan } = this.props;
    const plan = rawPlan.map((item) => {
      const arr = item.items;
      const liEl = arr.map(el => <li key={el}>{el}</li>);
      return (
        <div key={item}>
          <h3>{item.header}</h3>
          <ul className={styles.edUl}>
            {liEl}
          </ul>
        </div>
      );
    });

    return (
      <div className={styles.edBg}>
        <div className={styles.edCon}>
          <h1>структура обучения</h1>
          <div className={styles.edMain}>
            <div className={styles.midBar}>
              <div className={styles.leftBar}>
                <p>7-11 месяцев</p>
              </div>
            </div>
            <div className={styles.rightBar}>
              {plan}
            </div>
          </div>
          <Button />
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  rawPlan: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]))).isRequired,
};

export default Education;
