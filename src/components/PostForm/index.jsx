import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Button from '../Button';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubmit(e) {
    const { name } = this.state;
    const { email } = this.state;
    const data = {
      name,
      email,
    };
    e.preventDefault();
    fetch('#', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        return JSON.stringify(result);
      });
  }

  render() {
    const { para } = this.props;
    const { header } = this.props;
    return (
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.formDivision}>
            <h1>{header}</h1>
            <p>{para}</p>
            <form action="POST" onSubmit={this.handleSubmit} className={styles.formStyles}>
              <input type="text" name="name" onChange={this.handleNameChange} placeholder="Имя" required />
              <input type="email" name="email" onChange={this.handleEmailChange} placeholder="Телефон или Email" required />
              <div className={styles.checkboxStyles}>
                <input type="checkbox" name="agreement" className={styles.inputException} required />
                <label htmlFor="agreement">Я согласен на обработку своих персональных данных.</label>
              </div>
              <Button />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  header: PropTypes.string,
  para: PropTypes.string,
};

PostForm.defaultProps = {
  header: 'Оставляйте заявку',
  para: 'Так как количество мест ограничено, мы отбираем только мотивированных студентов, это существенно повышает уровень обучения в группах.',
};

export default PostForm;
