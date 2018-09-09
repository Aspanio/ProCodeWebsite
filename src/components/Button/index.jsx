import React, { Component} from 'react';
import styles from './styles.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <button type='submit' className={styles.button}>{this.props.text}</button>
        )
    }
}

Button.defaultProps = {
    text: 'записаться'
};

export default Button;