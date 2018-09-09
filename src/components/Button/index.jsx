import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <button type="submit" className={styles.button}>{text}</button>
    );
  }
}
Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'записаться',
};

export default Button;
