import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import styles from './styles.scss';
import Button from '../Button';

import placeBg from './imgs/placeImg.png';
import galleryImg from './imgs/galleryImg.jpg';

class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { placeImg } = this.props;
    const { placeImgs } = this.props;
    const { desc } = this.props;
    const { square } = this.props;
    const item = placeImgs.map(el => <img key={uuidv4()} src={el} alt="" />);
    return (
      <div className={styles.placeBg}>
        <div className={styles.placeContainer}>
          <h1>где проходит обучение</h1>
          <div className={styles.placeHeader}>
            <img src={placeImg} alt="План здания" />
            <p>Площадь <span>{square}<span className={styles.placeSpan}>М</span><sup>2</sup></span></p>
          </div>
          <p>{desc}</p>
          <div className={styles.placesGallery}>
            {item}
          </div>
          <Button />
        </div>
      </div>
    );
  }
}
Place.propTypes = {
  placeImg: PropTypes.string,
  square: PropTypes.string,
  desc: PropTypes.string,
  placeImgs: PropTypes.arrayOf(PropTypes.string),
};

Place.defaultProps = {
  placeImg: placeBg,
  square: '1200',
  desc: `Коворкинг Data Hub на Шулявке – это готовая инфраструктура
    для тех, кто привык работать в офисе со скоростным Wi-Fi, возможностью 
    воспользоваться принтером, сканером, удобным рабочим местом,
    местом для проведения переговоров, уютной кухней с бесплатным 
    кофе/чаем/печеньем.
    В коворкинге залы с рабочими местами разделены на тихую зону, где работает
    регламент работы с минимальными шумами, 
    и обычный – где позволяется негромкие переговоры`,
  placeImgs: [
    galleryImg,
    galleryImg,
    galleryImg,
  ],
};

export default Place;
