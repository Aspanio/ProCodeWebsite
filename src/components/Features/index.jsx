import React, { Component } from 'react';
import styles from './styles.scss';


class Features extends Component {
    render () {
        return (
            <div className={styles.featuresContainer}>
                <div className={styles.features}>
                    <img src="../../imgs/icon.png" alt="Картинка"/>
                    <h3>ДЛЯ ЛЮБОГО УРОВНЯ</h3>
                    <p>Программа построена таким 
                        образом, чтобы можно было 
                        обучиться как с нуля, так и усовершенствовать уже 
                        имеющиеся навыки.
                    </p>
                </div>
                <div className={styles.features}>
                    <img src="../../imgs/icon2.png" alt="Картинка"/>
                    <h3>Преподаватели</h3>
                    <p>Все преподаватели 
                        высококвалифицированные 
                        специалисты с большим 
                        менторским опытом.
                    </p>
                </div>
                <div className={styles.features}>
                    <img src="../../imgs/icon3.png" alt="Картинка"/>
                    <h3>Стажировка</h3>
                    <p>Благодаря практике на 
                        реальных проектах 
                        IT-компании, вы получаете 
                        коммерческий опыт, 
                        который требуют 
                        работодатели.
                    </p>
                </div>
                <div className={styles.features}>
                    <img src="../../imgs/icon4.png" alt="Картинка"/>
                    <h3>результат</h3>
                    <p>Выпускники готовы к 
                        трудоустройству без 
                        дополнительной подготовки.
                    </p>
                </div>
            </div>
        )
    }
}

export default Features;