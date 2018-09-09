import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Button from '../Button';

class PriceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items } = this.props;
    const { price } = this.props;
    const { course } = this.props;
    const item = items.map(elem => <li key={elem}>{elem}</li>);
    return (
      <div className={styles.priceCard}>
        <h2><sup>Курс</sup><span>{course}</span></h2>
        <h1>{price}</h1>
        <h4>грн./месяц</h4>
        <hr />
        <ul>
          {item}
        </ul>
        <hr />
        <Button text="Оплатить курс" />
      </div>
    );
  }
}

PriceCard.propTypes = {
  course: PropTypes.string,
  price: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};

PriceCard.defaultProps = {
  course: 'Онлайн',
  price: '3900',
  items: [
    '15 месяцев обучения: 9-базовые знания + 6-стажировка',
    'Оплачивается практика для лучших студентов',
    'Возможность трудоустроиться по месту стажировки на позиции Junior',
  ],
};

export default PriceCard;
