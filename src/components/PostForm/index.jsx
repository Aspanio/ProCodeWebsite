import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../Button';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {   
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        let data = {
            name: this.state.name,
            email: this.state.email
        }
        e.preventDefault();
        fetch('#', {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            return JSON.stringify(data)
        })
    }

    render () {
        return (
            <div className={styles.bgImage}>
                <div className={styles.formContainer}>
                    <div className={styles.formDivision}>
                        <h1>{this.props.header}</h1>
                        <p>{this.props.para}</p>
                        <form action="POST" onSubmit={this.handleSubmit} className={styles.formStyles}>
                            <input type='text' name='name' onChange={this.handleNameChange} placeholder='Имя' required />
                            <input type='email' name='email' onChange={this.handleEmailChange} placeholder='Телефон или Email' required />
                            <div className={styles.checkboxStyles}>
                                <input type="checkbox" name='agreement' className={styles.inputException} required />
                                <label htmlFor="agreement">Я согласен на обработку своих персональных данных.</label>
                            </div>
                            <Button />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

PostForm.defaultProps = {
    header: 'Оставляйте заявку',
    para: 'Так как количество мест ограничено, мы отбираем только мотивированных студентов, это существенно повышает уровень обучения в группах.'
}

export default PostForm;