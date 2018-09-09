import React, { Component } from 'react';
import styles from './styles.scss';


class Topbar extends Component {
    render () {
        return (
                <nav style={{backgroundColor: '#fff'}}>
                    <div className={styles.topbarContainer}>
                        <img src="../../imgs/logo.png" alt="PROCODE" className={styles.logo}/>
                        <h3>8 800 505-72-45</h3>
                    </div>
                </nav>
        )
    }
}

export default Topbar;