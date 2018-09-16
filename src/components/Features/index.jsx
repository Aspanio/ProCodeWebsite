import React from 'react';
import styles from './styles.scss';

import icon1 from './imgs/icon.png';
import icon2 from './imgs/icon2.png';
import icon3 from './imgs/icon3.png';
import icon4 from './imgs/icon4.png';


const Features = () => (
  <div className={styles.container}>
    <div className={styles.features}>
      <img src={icon1} alt="Картинка" />
      <h3>ДЛЯ ЛЮБОГО УРОВНЯ</h3>
      <p>Программа построена таким
        образом, чтобы можно было
        обучиться как с нуля, так и усовершенствовать уже
        имеющиеся навыки.
      </p>
    </div>
    <div className={styles.features}>
      <img src={icon2} alt="Картинка" />
      <h3>Преподаватели</h3>
      <p>Все преподаватели
        высококвалифицированные
        специалисты с большим
        менторским опытом.
      </p>
    </div>
    <div className={styles.features}>
      <img src={icon3} alt="Картинка" />
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
      <img src={icon4} alt="Картинка" />
      <h3>результат</h3>
      <p>Выпускники готовы к
        трудоустройству без
        дополнительной подготовки.
      </p>
    </div>
  </div>
);

export default Features;
