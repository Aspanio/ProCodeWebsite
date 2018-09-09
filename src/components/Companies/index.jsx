import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import uuidv4 from 'uuid/v4';

class Companies extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { companies } = this.props;
        let items = companies.map(el=>{
            return <img key={uuidv4()} src={el} alt='#'/>
        })
        return(
            <div className={styles.compBg}>
                <div className={styles.compContainer}>
                    <h1>компании в которых работают наши выпускники</h1>
                    <div className={styles.companies}>
                        {items}
                    </div>
                    <Button />
                </div>
            </div>
        )
    }
}

Companies.defaultProps = {
    backgroundImage: './comp.png',
    companies: [
        '../../imgs/ciklum.png',
        '../../imgs/DataArt.png',
        '../../imgs/epam.png',
        '../../imgs/GlobalLogic.png',
        '../../imgs/infopulse.png',
        '../../imgs/nettracker.png',
        '../../imgs/nix.png',
        '../../imgs/sigma.png',
        '../../imgs/softserve.png',
        '../../imgs/vipDesign.png'
    ]
}

export default Companies;