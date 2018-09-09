import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../Button';

class Secrets extends Component {
    render () {
        return (
            <div className={styles.sectionSecrets}>
                <div className={styles.secretsContainer}>
                    <h2 className={styles.secretsHeader}>В чем секрет эффективности курса?</h2>
                    <div className={styles.secrets}>
                        <div className={styles.secretsBlock}>
                            <h1>1</h1>
                            <p>Вы получите не только все необходимые навыки, 
                                но и понимание, как именно применять их на практике
                            </p>
                        </div>
                        <div className={styles.secretsBlock}>
                            <h1>2</h1>
                            <p>Благодаря практической части, у вас будет не один 
                                итоговый проект, а несколько реальных коммерческих 
                                проектов, которые пойдут в ваше портфолио
                            </p>
                        </div>
                        <div className={styles.secretsBlock}>
                            <h1>3</h1>
                            <p>Опытные менеджеры компании обучат тонкостям 
                                рабочего процесса, это позволит повысить вашу ценность 
                                как специалиста и, соответственно, иметь достойный 
                                уровень заработной платы
                            </p>
                        </div>
                        <div className={styles.secretsBlock}>
                            <h1>4</h1>
                            <p>Учебная программа согласована с рекрутерами 
                                IT-компаний, а потому полностью соответствует 
                                запросам рынка
                            </p>
                        </div>
                        <div className={styles.secretsBlock}>
                            <h1>5</h1>
                            <p>Благодаря стажировке, вы получаете коммерческий 
                                опыт на реальных проектах, а так же возможность 
                                трудоустройства на должности Junior
                                в компаниях – партнерах.
                            </p>
                        </div>
                    </div>
                    <Button />
                </div>
            </div>
        )
    }
}

export default Secrets;