import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import styles from './styles.scss';
import Button from '../Button';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { obj } = this.props;
    const a = obj.map((item) => {
      const arr = item.items;
      const liEl = arr.map(el => <li key={uuidv4()}>{el}</li>);
      return (
        <div key={uuidv4()}>
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
              {a}
            </div>
          </div>
          <Button />
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  obj: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Education;
