import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import uuidv4 from 'uuid/v4';

class Education extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let obj = this.props.obj
        let a = obj.map((item)=>{
            let arr = item.items;
            let liEl = arr.map(el => {
                return <li key={uuidv4()}>{el}</li>
            })

            return (
            <div key={uuidv4()}>
                <h3>{item.header}</h3>
                <ul className={styles.edUl}>
                    {liEl}
                </ul>
            </div>
            )
        })

        return(
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
        )
    }
}

export default Education;