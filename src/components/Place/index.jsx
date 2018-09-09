import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import uuidv4 from 'uuid/v4';

class Place extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { placeImg } = this.props;
        const { placeImgs } = this.props;
        const { desc } = this.props;
        const item = placeImgs.map(el=>{
            return <img key={uuidv4()} src={el}/>
        })
        return(
             <div className={styles.placeBg}>
                <div className={styles.placeContainer}>
                    <h1>где проходит обучение</h1>
                    <div className={styles.placeHeader}>
                        <img src={placeImg} alt="План здания"/>
                        <p>Площадь <span>{this.props.square} <span className={styles.placeSpan}>М</span><sup>2</sup></span></p>
                    </div>
                    <p>{desc}</p>
                    <div className={styles.placesGallery}>
                        {item}
                    </div>
                    <Button />
                </div>
            </div>
        )
    }
}

Place.defaultProps = {
    placeImg: '../../imgs/placeImg.png',
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
        '../../imgs/galleryImg.jpg',
        '../../imgs/galleryImg.jpg',
        '../../imgs/galleryImg.jpg'
    ]
}

export default Place;