import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import styles from './styles.scss';
import Button from '../Button';


class SpecialOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'flex',
    };

    this.onComplete = this.onComplete.bind(this);
  }

  onComplete() {
    this.setState({
      display: 'none',
    });
  }

  render() {
    const { items } = this.props;
    const { counter } = this.props;
    const { price } = this.props;
    const { prevPrice } = this.props;
    const { display } = this.state;
    const item = items.map(el => <li key={el}>{el}</li>);
    return (
      <div style={{ display }} className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.specialOffer}>
            <h1>Специальный курс с <span>трудоустройством</span></h1>
            <div className={styles.specialPrices}>
              <div className={styles.currentPrice}>
                <h1>{price}</h1>
                <p>грн./мес</p>
              </div>
              <div className={styles.prevPrice}>
                <h1>{prevPrice}</h1>
                <p>грн./мес</p>
              </div>
              <div className={styles.counter}>
                <p>предложение заканчивается через</p>
                <h3><Countdown date={counter} onComplete={this.onComplete} /></h3>
              </div>
            </div>
            <ul>
              {item}
            </ul>
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

SpecialOffer.propTypes = {
  price: PropTypes.number,
  prevPrice: PropTypes.number,
  counter: PropTypes.objectOf(PropTypes.number),
  items: PropTypes.arrayOf(PropTypes.string),
};

SpecialOffer.defaultProps = {
  price: 9500,
  prevPrice: 10500,
  counter: new Date(2019, 0, 1, 0, 0, 0, 0),
  items: [
    '15 месяцев обучения: 9-базовые знания + 6-стажировка',
    'Оплачивается практика для лучших студентов',
    'Возможность трудоустроиться по месту стажировки на позиции Junior',
  ],
};

export default SpecialOffer;
