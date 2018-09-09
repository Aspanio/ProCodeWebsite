import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import uuidv4 from 'uuid/v4';

class PriceCard extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {items} = this.props;
        let item = items.map(elem => {
            return <li key={uuidv4()}>{elem}</li>
        })
        return(
            <div className={styles.priceCard}>
                <h2><sup>Курс</sup><span>{this.props.course}</span></h2>
                <h1>{this.props.price}</h1>
                <h4>грн./месяц</h4>
                <hr/>
                <ul>
                    {item}
                </ul>
                <hr/>
                <Button text="Оплатить курс"/>
            </div>
        )
    }
}

PriceCard.defaultProps = {
    course: 'Онлайн',
    price: 3900,
    items: [
        '15 месяцев обучения: 9-базовые знания + 6-стажировка',
        'Оплачивается практика для лучших студентов',
        'Возможность трудоустроиться по месту стажировки на позиции Junior'
    ]
}

export default PriceCard;